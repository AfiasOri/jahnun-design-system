import React from 'react';

import { StyledSpinner } from './Spinner.style';

export type SpinnerProps = {
	color?:
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'positive'
		| 'negative'
		| 'warning'
		| 'white'
		| 'light'
		| 'dark'
		| 'darker'
		| 'black';
	size?: 'small' | 'normal' | 'large' | 'huge';
	reversed?: boolean;
	style?: object;
	className?: string;
	dataTestId?: string;
};

export const Spinner: React.FC<SpinnerProps> = ({
	color = 'primary',
	size = 'normal',
	reversed = false,
	dataTestId = 'spinner',
	style = {},
	className = '',
}) => {
	const rootProps = { color, size, reversed, 'data-testid': dataTestId, style, className };

	return (
		<>
			<StyledSpinner {...rootProps} />
		</>
	);
};

export default Spinner;
