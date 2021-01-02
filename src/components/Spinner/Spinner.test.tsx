import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Spinner, SpinnerProps } from '.';

describe('Spinner', () => {
	let props: SpinnerProps;

	beforeEach(() => {
		props = {
			size: 'small',
			color: 'secondary',
			reversed: false,
			dataTestId: 'spinner',
		};
	});

	afterEach(cleanup);

	describe('render', () => {
		it('renders the spinner', () => {
			const { container, getByTestId } = render(<Spinner {...props} />);
			expect(getByTestId('spinner'));
			expect(container.firstChild).toHaveAttribute('color', 'secondary');
		});

		it('renders reversed spinner', () => {
			props.reversed = true;
			props.color = 'positive';
			const { container, getByTestId } = render(<Spinner {...props} />);
			expect(getByTestId('spinner'));
			expect(container.firstChild).toHaveAttribute('color', 'positive');
			expect(container.firstChild).toHaveAttribute('reversed');
		});
	});
});
