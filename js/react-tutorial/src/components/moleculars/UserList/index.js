import React from 'react';
import User from '../../atoms/User'

const UserList = ({ users, onRemove, onToggle }) => (
  <div>
    {users.map(user => (
      <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
    ))}
  </div>
);

export default UserList;