import { useGithubContext } from '../context/github_context/GithubContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { getUser, user } = useGithubContext();
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, [getUser, params.login]);

  return <div>{user.login}</div>;
};

export default User;
