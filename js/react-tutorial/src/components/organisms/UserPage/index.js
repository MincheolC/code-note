import React, {useState, useRef, useMemo, useCallback} from 'react';
import UserList from '../../moleculars/UserList';
import CreateUser from '../../atoms/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중....');
  return users.filter(user => user.active).length;
}

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
      email: 'mccha0407@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );
  const onCreate = useCallback(
    () => {
      const user = {
        id: nextId.current,
        username,
        email,
        active: false,
      }
      setUsers([...users, user]);  // = [users.concat(user)]
      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    },
    [users, username, email]
  );
  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  )

  const onToggle = useCallback(
    id => {
      // setUsers(users.map(user => (user.id === id) ? {...user, active: true} : {...user, active: false}))
      setUsers(users.map(user => (user.id === id) ? {...user, active: !user.active} : user))
    },
    [users]
  );

  const nextId = useRef(4);
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default React.memo(UserPage)