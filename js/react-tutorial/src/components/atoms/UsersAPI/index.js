import React, { useState } from 'react';
import axios from 'axios';
// import useAsync from '../../hooks/useAsync';
import { useAsync } from 'react-async';

async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  return response.data;
}

async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  return response.data;
}

function User({ id }) {
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

function UsersAPI() {
  const { data: users, error, isLoading, run } = useAsync({
    deferFn: getUsers,
  });
  const [userId, setUserId] = useState(null);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <>
      <ul>
        {users &&
          users.map((user) => (
            <li
              style={{ cursor: 'pointer' }}
              key={user.id}
              onClick={() => setUserId(user.id)}
            >
              {user.username} ({user.name})
            </li>
          ))}
      </ul>
      <button onClick={run}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default UsersAPI;
