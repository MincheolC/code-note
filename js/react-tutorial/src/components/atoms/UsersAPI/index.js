import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  isLoading: false,
  error: null,
  users: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        isLoading: true,
        error: null,
        users: null,
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        error: null,
        users: action.data,
      };
    case 'ERROR':
      return {
        isLoading: false,
        error: action.error,
        users: null,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function UsersAPI() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const { isLoading, error, users } = state;
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
