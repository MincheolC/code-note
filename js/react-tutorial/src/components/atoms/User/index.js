import React from 'react';

const User = ({ user, onRemove }) => (
  <div>
    <b>{user.username}</b>
    <span>({user.email})</span>
    <button onClick={() => onRemove(user.id)}>삭제</button>
  </div>
);

export default User;