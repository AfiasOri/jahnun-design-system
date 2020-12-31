import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';

import { Button, ButtonProps } from './Button';

describe('render', () => {
	let props: ButtonProps = { label: 'this is a button' };

	it('renders the button', () => {
		const { queryByText } = render(<Button {...props} />);
		expect(queryByText('this is a button'));
	});
});
