import React from 'react'
import { Todo } from '../../shared/types'

interface TodoItemProps {
  todo: Todo,
  onRemove: (id: number) => void,
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove }) => {
  return (
    <li>
      <span>{todo.todo}</span>
      <button onClick={() => onRemove(todo.id)}>x</button>
    </li>
  )
}

export default React.memo(TodoItem)