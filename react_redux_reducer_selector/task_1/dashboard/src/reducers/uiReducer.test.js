import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

// Test suite
describe('uiReducer', () => {
  // Test when no action is passed
  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test when SELECT_COURSE action is passed
  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(newState.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test when DISPLAY_NOTIFICATION_DRAWER action is passed
  it('should correctly change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const newState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });

  // Add more tests as needed for other actions
});
