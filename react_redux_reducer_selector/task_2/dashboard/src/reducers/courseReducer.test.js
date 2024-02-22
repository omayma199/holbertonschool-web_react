import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Test suite
describe('courseReducer', () => {
  // Test that the default state returns an empty array
  it('should return the initial state when no action is passed', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  // Test that FETCH_COURSE_SUCCESS returns the data passed
  it('should handle FETCH_COURSE_SUCCESS action correctly', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        credit: 40
      }
    ];

    const newState = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    expect(newState).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ]);
  });

  // Test that SELECT_COURSE returns the data with the right item updated
  it('should handle SELECT_COURSE action correctly', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const newState = courseReducer(initialState, { type: SELECT_COURSE, index: 2 });
    expect(newState).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ]);
  });

  // Test that UNSELECT_COURSE returns the data with the right item updated
  it('should handle UNSELECT_COURSE action correctly', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ];

    const newState = courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 });
    expect(newState).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40
      }
    ]);
  });

  // Add more tests as needed for other actions
});
