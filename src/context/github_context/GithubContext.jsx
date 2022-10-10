import { useReducer, createContext, useContext, useCallback } from 'react';
import githubReducer from './Githubreducer';
import { GET_USERS, SET_LOADING, CLEAR_USERS } from '../../actions';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const initialState = {
  users: [],
  loading: false,
};

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = useCallback(async (userName) => {
    setLoading();
    try {
      const response = await fetch(`${GITHUB_URL}/search/users?q=${userName}`, {
        // headers: {
        //   Authorization: `token ${GITHUB_TOKEN}`,
        // },
      });
      const { items: users } = await response.json();
      dispatch({ type: GET_USERS, payload: users });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  return (
    <GithubContext.Provider value={{ ...state, searchUsers, clearUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => useContext(GithubContext);
