// Link.react.test.js
import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import Link from '../';

const { act } = renderer;

test('Link changes the class when hovered', () => {
  const component: ReactTestRenderer = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );

  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => tree.props.onMouseEnter());

  // re-rendering
  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => tree.props.onMouseLeave());

  // re-rendering
  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});