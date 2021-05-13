import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import TodoItem from '../';

const { act } = renderer;

test('Todo render properly', () => {
  const todo = { id: 1, todo: 'test', onRemove: () => {} };
  const component: ReactTestRenderer = renderer.create(
    <TodoItem id={todo.id} todo={todo.todo} onRemove={todo.onRemove}/>,
  );

  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});