import React from 'react';
import User from '../../atoms/User'

const UserList = () => {
  const users = [
    {
      id: 1,
      username: 'mincheol',
      email: 'mccha0407@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;