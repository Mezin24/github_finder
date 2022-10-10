import { useEffect, useState } from 'react';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_GITHUB_URL}/users`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => {
        return <h3 key={user.id}>{user.login}</h3>;
      })}
    </div>
  );
};

export default UserResults;
