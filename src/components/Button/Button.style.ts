import styled, { css } from 'styled-components';

import { color, spacing } from '../common/styles';
import { ButtonProps } from './index';

const sizes = {
	small: 16,
	normal: 18,
	large: 20,
	huge: 22,
};

export const StyledButton = styled.button<ButtonProps>`
  font-size: ${({ size }) => (size ? sizes[size] : sizes.normal)}px;
  color: ${props => (props.color ? color[props.color] : color.primary)};
  background-color: white;
  border: 1px solid ${props => (props.color ? color[props.color] : color.primary)};
  border-radius: ${({ size }) => (size === 'small' ? spacing.borderRadius.small : spacing.borderRadius.default)}px;
  padding: ${({ size }) => (size ? spacing.padding[size] / 2 : spacing.padding.normal / 2)}px ${({ size }) =>
	size ? spacing.padding[size] : spacing.padding.normal}px;
  transition: all 250ms;
  cursor: pointer;

  ${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.3;
			cursor: default;
		`}

	${props =>
		props.inverted &&
		css`
			color: white;
			background-color: ${props.color ? color[props.color] : color.primary};
		`}
    
  &:hover {
    &:not([disabled]) {
	  ${props =>
			!props.inverted
				? props.color === 'white' || props.color === 'tertiary'
					? css`
							color: ${color.black};
							background-color: ${color[props.color]};
							border: 1px solid ${color.border};
					  `
					: css`
							color: ${color.white};
							background-color: ${props.color ? color[props.color] : color.primary};
					  `
				: css`
						color: ${props.color ? color[props.color] : color.primary};
						background-color: white;
						border: 1px solid ${props.color ? color[props.color] : color.primary};
				  `}
    
    },
  },

  &:focus {
    outline: none;
  },
`;

export default StyledButton;
