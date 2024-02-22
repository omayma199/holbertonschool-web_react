import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

// Test suite
describe('courseReducer', () => {
  // Test that the default state returns the expected structure
  it('should return the initial state when no action is passed', () => {
    const newState = courseReducer(undefined, {});
    const expectedState = fromJS({
      courses: {},
    });
    expect(newState).toEqual(expectedState);
  });

  // Test that FETCH_COURSE_SUCCESS returns the data passed
  it('should handle FETCH_COURSE_SUCCESS action correctly', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
      },
    ];

    const newState = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    expect(newState).toEqual(expectedState);
  });

  // Test that SELECT_COURSE returns the data with the right item updated
  it('should handle SELECT_COURSE action correctly', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    const newState = courseReducer(initialState, { type: SELECT_COURSE, index: 2 });
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    expect(newState).toEqual(expectedState);
  });

  // Test that UNSELECT_COURSE returns the data with the right item updated
  it('should handle UNSELECT_COURSE action correctly', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    const newState = courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 });
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'ES6', credit: 60, isSelected: false },
        2: { id: 2, name: 'Webpack', credit: 20, isSelected: false },
        3: { id: 3, name: 'React', credit: 40, isSelected: false },
      },
    });

    expect(newState).toEqual(expectedState);
  });
});
