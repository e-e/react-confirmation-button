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

it('renders correctly with provided classnames', () => {
  const component = renderer.create(
    <ConfirmationButton
      onConfirm={() => {}}
      wrapClass="wrap-class"
      buttonClass="button-class"
      confirmClass="confirm-class"
      cancelClass="cancel-class"
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctly with alt button text', () => {
  const component = renderer.create(
    <ConfirmationButton
      onConfirm={() => {}}
      confirmText="Yes"
      buttonText="Do something"
      cancelText="No"
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

it('renders correctly after clicking confirm with alt button text', () => {
  const component = renderer.create(
    <ConfirmationButton
      onConfirm={() => {}}
      confirmText="Yes"
      buttonText="Do something"
      cancelText="No"
    />
  );
  component.getInstance().onConfirmClicked();

  expect(component.toJSON()).toMatchSnapshot();
});
