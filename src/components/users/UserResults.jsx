import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { useGithubContext } from '../../context/github_context/GithubContext';

const UserResults = () => {
  const { users, loading } = useGithubContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserResults;
