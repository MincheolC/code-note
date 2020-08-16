import React, {useState, useRef} from 'react';
import UserList from '../../moleculars/UserList';
import CreateUser from '../../atoms/CreateUser';

function UserPage() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const [users, setUsers] = useState([
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
  ]);

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }
    setUsers([...users, user]);  // = [users.concat(user)]
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const nextId = useRef(4);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove}/>
    </>
  )
}

export default UserPage