import {
  GET_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USER_REPOS,
} from '../../actions';

const githubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case CLEAR_USERS:
      return { ...state, users: [] };

    default:
      return state;
  }
};

export default githubReducer;
