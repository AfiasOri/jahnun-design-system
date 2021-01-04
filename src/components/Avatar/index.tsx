import React from 'react';

import { Image, Initial } from './Avatar.style';

export type AvatarProps = {
	isLoading?: boolean;
	userName?: string;
	src?: string;
	size?: 'small' | 'normal' | 'large' | 'huge';
	onClick?: () => void;
	className?: string;
	style?: object;
	dataTestId?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
	isLoading = false,
	userName = 'loading',
	size = 'normal',
	src,
	dataTestId = 'avatar',
	...rest
}: AvatarProps) => {
	const rootProps = { isLoading, userName, size, src, 'data-testid': dataTestId, ...rest };
	let AvatarFigure = null;
	const shownName = userName
		? userName
				.split(' ')
				.map(word => word.substring(0, 1))
				.join('')
				.toUpperCase()
		: 'L';

	if (isLoading) {
		AvatarFigure = (
			<img src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/empty-avatar.jpg' alt='loading' />
		);
	} else if (src) {
		AvatarFigure = <img src={src} alt={userName} />;
	} else {
		AvatarFigure = (
			<Initial size={size} aria-hidden='true'>
				<p>{shownName}</p>
			</Initial>
		);
	}

	return <Image {...rootProps}>{AvatarFigure}</Image>;
};

export default Avatar;
