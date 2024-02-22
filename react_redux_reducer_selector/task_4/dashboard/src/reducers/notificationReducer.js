import { fromJS, Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';
import notificationsNormalizer from '../schema/notifications';

// Initial state
const initialState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
});

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge(normalizedData.entities).set('filter', 'DEFAULT');
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    default:
      return state;
  }
};

export default notificationReducer;
