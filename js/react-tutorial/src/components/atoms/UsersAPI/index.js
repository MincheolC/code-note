import React, { useState, useEffect } from 'react';
// import useAsync from '../../hooks/useAsync';
import {
  getUser,
  getUsers,
  useUsersState,
  useUsersDispatch,
} from '../../contexts/UserAPIContext';

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user;

  if (loading) return <div>로딩 중...</div>;
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
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;
  const fetchUsers = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩 중...</div>;
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
      <button onClick={fetchUsers}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default UsersAPI;
