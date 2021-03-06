import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import TodoItem from '../';

test('Todo render properly', () => {
  const onRemove = () => {};
  const todo = { id: 1, todo: 'test'};
  const component: ReactTestRenderer = renderer.create(
    <TodoItem todo={todo} onRemove={onRemove}/>,
  );

  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});