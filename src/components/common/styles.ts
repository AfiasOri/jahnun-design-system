import { css } from 'styled-components';

export const background = {
	appLight: '#F6F9FC',
	appDark: '#7A8997',
	positive: '#E1FFD4',
	negative: '#FEDED2',
	warning: '#FFF5CF',
};

export const color = {
	primary: '#FF4785',
	secondary: '#1EA7FD',
	tertiary: '#DDDDDD',

	border: 'rgba(0,0,0,.1)',

	positive: '#66BF3C',
	negative: '#FF4400',
	warning: '#E69D00',

	white: '#FFFFFF',
	light: '#F3F3F3',
	medium: '#DDDDDD',
	dark: '#666666',
	darker: '#333333',
	black: '#000000',
};

export const spacing = {
	padding: {
		small: 8,
		normal: 16,
		large: 24,
		huge: 32,
	},
	borderRadius: {
		small: 5,
		default: 10,
	},
};

export const typography = {
	weight: {
		regular: '400',
		bold: '700',
		extrabold: '800',
	},
	size: {
		s1: 12,
		s2: 14,
		s3: 16,
		m1: 20,
		m2: 24,
		m3: 28,
		l1: 32,
		l2: 40,
		l3: 48,
	},
};

export const breakPoint = 600;
export const pageMargin = 5.5555;

export const pageMargins = css`
	padding: 0 ${spacing.padding.normal}px;
	@media (min-width: ${breakPoint * 1}px) {
		margin: 0 ${pageMargin * 1}%;
	}

	@media (min-width: ${breakPoint * 2}px) {
		margin: 0 ${pageMargin * 2}%;
	}

	@media (min-width: ${breakPoint * 3}px) {
		margin: 0 ${pageMargin * 3}%;
	}

	@media (min-width: ${breakPoint * 4}px) {
		margin: 0 ${pageMargin * 4}%;
	}
`;
