import React from 'react';
import ConfirmationButton from '../src/ConfirmationButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(
    <ConfirmationButton onConfirm={() => {}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctly after clicking confirm', () => {
  const component = renderer.create(
    <ConfirmationButton onConfirm={() => {}} />
  );
  component.getInstance().onConfirmClicked();

  expect(component.toJSON()).toMatchSnapshot();
});
