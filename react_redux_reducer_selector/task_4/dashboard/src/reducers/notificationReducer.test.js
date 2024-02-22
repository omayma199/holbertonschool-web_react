import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

// Test suite
describe('notificationReducer', () => {
  // Test that the default state returns the expected structure
  it('should return the initial state when no action is passed', () => {
    const newState = notificationReducer(undefined, {});
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {},
    });
    expect(newState).toEqual(expectedState);
  });

  // Continue with your other tests...

  // Example test
  it('should handle FETCH_NOTIFICATIONS_SUCCESS action correctly', () => {
    // Your test logic here
  });
});
