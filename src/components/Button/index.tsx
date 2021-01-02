import * as React from 'react';

import StyledButton from './button.style';

export type ButtonProps = {
	children: any;
	onClick?: () => void;
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
	type?: 'submit' | 'button' | 'reset';
	disabled?: boolean;
	className?: string;
	dataTestId?: string;
	style?: any;
	inverted?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	disabled = false,
	type = 'submit',
	color = 'primary',
	size = 'normal',
	className = '',
	dataTestId = 'button',
	style,
	inverted = false,
}) => {
	const handleClick = () => {
		if (!disabled && onClick) onClick();
	};

	const rootProps = {
		color,
		size,
		type,
		className,
		onClick: handleClick,
		disabled,
		'data-testid': dataTestId,
		style,
		inverted,
	};

	return (
		<StyledButton {...rootProps}>
			<span>{children}</span>
		</StyledButton>
	);
};
