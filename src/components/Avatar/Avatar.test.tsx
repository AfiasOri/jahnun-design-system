import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Avatar, AvatarProps } from '.';

describe('Avatar', () => {
	let props: AvatarProps = {};

	afterEach(cleanup);

	describe('render', () => {
		it('renders with default props', () => {
			const { getByTestId } = render(<Avatar />);
			expect(getByTestId('avatar'));

			expect(getByTestId('avatar').getAttributeNames()).not.toContain('size');
			expect(getByTestId('avatar').getAttributeNames()).not.toContain('isLoading');
			expect(getByTestId('avatar').getAttributeNames()).not.toContain('src');
		});

		it('renders with isLoading', () => {
			props.isLoading = true;
			const { container, getByTestId } = render(<Avatar {...props} />);
			expect(getByTestId('avatar'));
			expect(container.firstChild?.firstChild).toHaveAttribute('alt', 'loading');
		});

		it('renders with text', () => {
			props.isLoading = false;
			props.userName = 'ori afias';
			const { container, getByTestId, getByText } = render(<Avatar {...props} />);
			expect(getByTestId('avatar'));
			expect(getByText('OA'));
		});

		it('renders with text and src', () => {
			props.isLoading = false;
			props.userName = 'ori afias';
			props.src = 'https://image.flaticon.com/icons/png/512/194/194938.png';
			const { container, getByTestId, getByText } = render(<Avatar {...props} />);
			expect(getByTestId('avatar'));
			expect(container.firstChild?.firstChild).toHaveAttribute('src', props.src);
			expect(container.firstChild?.firstChild).toHaveAttribute('alt', 'ori afias');
		});

		it('renders with different size', () => {
			props.size = 'large';
			const { container, getByTestId, getByText } = render(<Avatar {...props} />);
			expect(getByTestId('avatar'));
			expect(container.firstChild?.firstChild).toHaveAttribute('src', props.src);
			expect(container.firstChild?.firstChild).toHaveAttribute('alt', 'ori afias');
			expect(container.firstChild).toHaveStyle('height: 28px');
		});
	});
});
