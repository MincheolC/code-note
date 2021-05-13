import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import CInputForm from '../components/CInputForm'
import { Todo } from '../shared/types'

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onRemove = (id: number) => setTodos(todos.filter(todo => todo.id !== id));
  const onSubmit = (input: string) => setTodos([...todos, { id: todos.length, todo: input }]);

  return (
    <>
      <CInputForm onSubmit={onSubmit} />
      <TodoList todos={todos} onRemove={onRemove}/>
    </>
  )
}

export default Home;