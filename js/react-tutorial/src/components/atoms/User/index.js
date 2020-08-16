import React from 'react';

const User = ({ user, onRemove, onToggle }) => (
  <div>
    <b
      style={{
        cursor: 'pointer',
        color: user.active ? 'green' : 'black'
      }}
      onClick={() => onToggle(user.id)}
    >{user.username}</b>
    <span>({user.email})</span>
    <button onClick={() => onRemove(user.id)}>삭제</button>
  </div>
);

export default User;