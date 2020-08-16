import React from 'react';
import User from '../../atoms/User'

const UserList = ({ users, onRemove }) => (
  <div>
    {users.map(user => (
      <User user={user} key={user.id} onRemove={onRemove} />
    ))}
  </div>
);

export default UserList;