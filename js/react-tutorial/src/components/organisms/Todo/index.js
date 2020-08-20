import React from 'react';
import { createGlobalStyle } from 'styled-components';
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
    <>
      <GlobalsStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default Todo;
