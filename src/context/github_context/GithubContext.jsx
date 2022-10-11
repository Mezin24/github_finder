import { useReducer, createContext, useContext, useCallback } from 'react';
import githubReducer from './Githubreducer';
import {
  GET_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USER_REPOS,
} from '../../actions';
import { useNavigate } from 'react-router-dom';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const initialState = {
  users: [],
  user: {},
  repos: [],
  loading: false,
};

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const navigate = useNavigate();

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

  const getUser = useCallback(
    async (login) => {
      setLoading();
      try {
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
          // headers: {
          //   Authorization: `token ${GITHUB_TOKEN}`,
          // },
        });
        if (response.status === 404) {
          return navigate('/');
        }

        const data = await response.json();
        dispatch({ type: GET_USER, payload: data });
      } catch (error) {
        console.log(error.message);
      }
    },
    [navigate]
  );

  const getUserRepos = useCallback(
    async (login) => {
      setLoading();
      try {
        const response = await fetch(
          `${GITHUB_URL}/users/${login}/repos?sort=created&per_page=10`,
          {
            // headers: {
            //   Authorization: `token ${GITHUB_TOKEN}`,
            // },
          }
        );
        if (response.status === 404) {
          return navigate('/');
        }

        const data = await response.json();
        dispatch({ type: GET_USER_REPOS, payload: data });
      } catch (error) {
        console.log(error.message);
      }
    },
    [navigate]
  );

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  return (
    <GithubContext.Provider
      value={{ ...state, searchUsers, clearUsers, getUser, getUserRepos }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => useContext(GithubContext);
