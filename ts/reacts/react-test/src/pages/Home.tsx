import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import { Todo } from '../shared/types'

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onRemove = (id: number) => setTodos(todos.filter(todo => todo.id !== id));

  return (
    <TodoList todos={todos} onRemove={onRemove}/>
  )
}

export default Home;