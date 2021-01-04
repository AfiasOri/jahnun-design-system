import styled, { css } from 'styled-components';

import { AvatarProps } from '.';
import { color, typography } from '../common/styles';

const sizes = {
	huge: 40,
	large: 28,
	normal: 20,
	small: 16,
};

export const Initial = styled.div<AvatarProps>`
color: ${color.light};
text-align: center;

font-size: ${typography.size.s1}px;
line-height: ${sizes.normal}px;

${props =>
	props.size === 'small' &&
	css`
		font-size: ${typography.size.s1 - 2}px;
		line-height: ${sizes.small}px;
	`}

  ${props =>
		props.size === 'large' &&
		css`
			font-size: ${typography.size.s2}px;
			line-height: ${sizes.large}px;
		`}

    ${props =>
		props.size === 'huge' &&
		css`
			font-size: ${typography.size.s3}px;
			line-height: ${sizes.large}px;
		`}
`;

export const Image = styled.div<AvatarProps>`
	background: ${({ isLoading }) => (!isLoading ? 'transparent' : color.light)};
	border-radius: 50%;

	overflow: hidden;

	display: flex;
	align-items: center;
	justify-content: center;

	height: ${sizes.normal}px;
	width: ${sizes.normal}px;
	line-height: ${sizes.normal}px;

	${({ size }) =>
		size &&
		css`
			height: ${sizes[size]}px;
			width: ${sizes[size]}px;
			line-height: ${sizes[size]}px;
		`}

	${({ src, isLoading }) =>
		!src &&
		css`
			background: ${!isLoading && color.primary};
		`}

	img {
		width: 100%;
		height: auto;
		display: block;
	}
`;
