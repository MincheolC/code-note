import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import CInputForm from '../';

test('CInputForm render properly', () => {
  const onSubmit = () => {};
  const component: ReactTestRenderer = renderer.create(
    <CInputForm onSubmit={onSubmit}/>,
  );

  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});