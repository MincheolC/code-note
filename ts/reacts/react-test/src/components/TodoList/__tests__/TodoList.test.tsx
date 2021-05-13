import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import TodoList from '../';

test('Todo render properly', () => {
  const onRemove = () => {};
  const todos = [
    { id: 1, todo: 'test1'},
    { id: 2, todo: 'test2'}
  ];
  const component: ReactTestRenderer = renderer.create(
    <TodoList todos={todos} onRemove={onRemove}/>,
  );

  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});