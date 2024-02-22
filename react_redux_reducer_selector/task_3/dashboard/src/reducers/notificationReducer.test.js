import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

// Test suite
describe('notificationReducer', () => {
  // Test that the default state has the correct structure
  it('should return the initial state when no action is passed', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual({
      filter: 'DEFAULT',
      notifications: []
    });
  });

  // Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed
  it('should handle FETCH_NOTIFICATIONS_SUCCESS action correctly', () => {
    const data = [
      {
        id: 1,
        type: 'default',
        value: 'New course available'
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available'
      },
      {
        id: 3,
        type: 'urgent',
        value: 'New data available'
      }
    ];

    const newState = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    expect(newState).toEqual({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    });
  });

  // Test that MARK_AS_READ returns the data with the right item updated
  it('should handle MARK_AS_READ action correctly', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const newState = notificationReducer(initialState, { type: MARK_AS_READ, index: 2 });
    expect(newState).toEqual({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    });
  });

  // Test that SET_TYPE_FILTER returns the data with the right filter updated
  it('should handle SET_TYPE_FILTER action correctly', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    };

    const newState = notificationReducer(initialState, { type: SET_TYPE_FILTER, filter: 'URGENT' });
    expect(newState).toEqual({
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ]
    });
  });

  // Add more tests as needed for other actions
});
