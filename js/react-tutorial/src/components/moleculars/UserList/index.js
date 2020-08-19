import React from 'react';
import User from '../../atoms/User'

const UserList = ({ users }) => (
  <div>
    {users.map(user => (
      <User user={user} key={user.id} />
    ))}
  </div>
);

export default React.memo(UserList);