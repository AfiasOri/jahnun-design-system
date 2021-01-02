import styled, { keyframes, css } from 'styled-components';

import { SpinnerProps } from './index';
import { color } from '../common/styles';

const sizes = {
	small: '1.5rem',
	normal: '2rem',
	large: '2.5rem',
	huge: '3rem',
};

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledSpinner = styled.div<SpinnerProps>`
	color: ${props => (props.color ? color[props.color] : color.primary)};
	margin: 10px auto 0 auto;
	border: 0.2em solid ${color.border};
	border-top: 0.2em solid ${props => (props.color ? color[props.color] : color.primary)};
	border-radius: 50%;
	animation: ${spin} 0.8s ${({ reversed }) => (reversed ? css`reverse` : css`linear`)} infinite;

	${({ size }) =>
		size &&
		css`
			width: ${sizes[size]};
			height: ${sizes[size]};
		`}
`;

export default StyledSpinner;
