import { keyframes, css } from 'styled-components';
import { color } from '../common/styles';

export const glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;

export const inlineGlow = css`
	animation: ${glow} 1.5s ease-in-out infinite;
	background: ${color.medium};
	color: transparent;
	cursor: progress;
`;
