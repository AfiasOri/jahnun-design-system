import { createGlobalStyle, css } from 'styled-components';
import { color, typography } from './styles';

export const bodyStyles = css`
	font-size: ${typography.size.s3}px;
	color: ${color.darker};
	margin: 0;
	overflow-y: auto;
	overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
	-webkit-overflow-scrolling: touch;
	* {
		box-sizing: border-box;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: ${typography.weight.regular};
		margin: 0;
		padding: 0;
	}
	button,
	input,
	textarea,
	select {
		outline: none;
	}
	sub,
	sup {
		font-size: 0.8em;
	}
	sub {
		bottom: -0.2em;
	}
	sup {
		top: -0.2em;
	}
	b,
	em {
		font-weight: ${typography.weight.bold};
	}
	hr {
		border: none;
		border-top: 1px solid ${color.border};
		clear: both;
		margin-bottom: 1.25rem;
	}
`;

const darkTheme =
	bodyStyles &&
	css`
		background-color: black;
	`;

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap';

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

export const DarkTheme = createGlobalStyle`
body {
  ${darkTheme}
}
`;
