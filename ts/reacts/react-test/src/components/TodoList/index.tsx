import React from 'react'
import TodoItem from '../TodoItem'
import { Todo } from '../../shared/types'

interface TodoListProps {
  todos: Array<Todo>,
  onRemove: (id: number) => void,
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove }) => {
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove}/>)}
    </ul>
  )
}

export default React.memo(TodoList)