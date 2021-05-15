import React, { useEffect, useState, useMemo } from 'react'
import TodoList from '../components/TodoList'
import CInputForm from '../components/CInputForm'
import { Todo } from '../shared/types'

function sortAscending(data: number[]) {
  const cData = [...data]
  cData.sort((a, b) => a - b);
  return cData;
}

const Home: React.FC = () => {
  const [data, setData] = useState<number[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetch = () => {
      const result = [5,6,7,1,2,4,9,10];
      setData([...result]);
    }
    fetch();
  }, []);

  const mData = useMemo(() => sortAscending(data), [data]);

  const onRemove = (id: number) => setTodos(todos.filter(todo => todo.id !== id));
  const onSubmit = (input: string) => setTodos([...todos, { id: todos.length, todo: input }]);

  return (
    <>
      <div>{`Sorted Data Memoization: ${mData.join(' ')}`}</div>
      <CInputForm onSubmit={onSubmit} />
      <TodoList todos={todos} onRemove={onRemove}/>
    </>
  )
}

export default Home;