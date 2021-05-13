import React from 'react';
import renderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CInputForm from '../';

afterEach(cleanup);

test('CInputForm render properly', () => {
  const onSubmit = jest.fn();
  const component: ReactTestRenderer = renderer.create(
    <CInputForm onSubmit={onSubmit}/>,
  );

  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});

it('CInputForm pass input text to onSubmit', () => {
  const onSubmit = jest.fn();
  const inputValue = 'test';

  const {getByText, getByLabelText, queryByLabelText} = render(
    <CInputForm onSubmit={onSubmit} />,
  );

  fireEvent.change(getByLabelText(/todo/i), { target: { value: inputValue }});
  fireEvent.click(getByText(/저장/i));

  expect(queryByLabelText(/todo/i)).toHaveValue('');
  expect(onSubmit).toBeCalled();
  expect(onSubmit.mock.calls).toEqual([['test']]);
});