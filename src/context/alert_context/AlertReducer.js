import { SET_ALERT, REMOVE_ALERT } from '../../actions';

export const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { msg: action.payload.msg, type: action.payload.type };
    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};
