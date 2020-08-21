import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersAPI() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);

      setIsLoading(true);

      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default UsersAPI;
