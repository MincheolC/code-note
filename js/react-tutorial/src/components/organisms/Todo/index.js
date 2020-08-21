import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from '../../contexts/TodoContext';
import TodoTemplate from '../../templates/Todo';
import TodoHead from '../../atoms/TodoHead';
import TodoList from '../../moleculars/TodoList';
import TodoCreate from '../../atoms/TodoCreate';

const GlobalsStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function Todo() {
  return (
    <TodoProvider>
      <GlobalsStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default Todo;
