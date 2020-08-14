import React from 'react';

const User = ({ user }) => (
  <div>
    <b>{user.username}</b> <span>({user.email})</span>
  </div>
);

export default User;