import React from 'react'

interface TodoItemProps {
  id: number,
  todo: string,
  onRemove: (id: number) => void,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, todo, onRemove }) => {
  return (
    <li>
      <span>{todo}</span>
      <button onClick={() => onRemove(id)}>x</button>
    </li>
  )
}

export default TodoItem