import React from 'react';
import styled from 'styled-components';
import TodoItem from '../../atoms/TodoItem';
import { useTodoState } from '../../contexts/TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const state = useTodoState();

  return (
    <TodoListBlock>
      {state.todos.map(({ id, text, done }) => (
        <TodoItem key={id} id={id} text={text} done={done} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
