import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button, ButtonProps } from '.';

describe('Button', () => {
	let props: ButtonProps;

	beforeEach(() => {
		props = {
			children: <div>I am a button</div>,
			onClick: jest.fn(),
			disabled: true,
			type: 'submit',
			color: 'primary',
			dataTestId: 'button',
		};
	});

	afterEach(cleanup);

	describe('actions', () => {
		it('triggers the callback when clicked', () => {
			props.disabled = false;
			const { getByTestId } = render(<Button {...props} />);
			const button = getByTestId('button');

			fireEvent.click(button);

			expect(props.onClick).toHaveBeenCalledTimes(1);
		});

		it('does not trigger the callback when clicked if the button is disabled', () => {
			const { getByTestId } = render(<Button {...props} />);
			const button = getByTestId('button');

			fireEvent.click(button);

			expect(props.onClick).toHaveBeenCalledTimes(0);
		});
	});

	describe('render', () => {
		it('renders the button', () => {
			const { container, getByTestId, queryByText } = render(<Button {...props} />);
			expect(getByTestId('button'));
			expect(queryByText('I am a button'));
			expect(container.firstChild).toHaveAttribute('type', 'submit');
			expect(container.firstChild).toHaveAttribute('color', 'primary');
			expect(container.firstChild).toHaveAttribute('disabled');
		});
	});
});
