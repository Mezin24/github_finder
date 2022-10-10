import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import Alert from '../components/layout/Alert';

const Home = () => {
  return (
    <>
      <Alert />
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
