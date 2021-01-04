import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// import { StoryWrapper } from '../common/utils';

import { Avatar, AvatarProps } from '.';
import { StoryWrapper } from '../common/utils';

export default {
	title: 'Components/Avatar',
	component: Avatar,
} as Meta;

export const Basic = (args: AvatarProps) => <Avatar {...args} />;

export const Small = () => (
	<StoryWrapper>
		<Avatar size='small' isLoading />
		<Avatar size='small' src='https://ianbotham.com/wp-content/uploads/2018/05/user-avatar-6.png' />
		<Avatar size='small' />
	</StoryWrapper>
);

export const Normal = () => (
	<StoryWrapper>
		<Avatar size='normal' isLoading />
		<Avatar size='normal' src='https://ianbotham.com/wp-content/uploads/2018/05/user-avatar-6.png' />
		<Avatar size='normal' />
	</StoryWrapper>
);

export const Large = () => (
	<StoryWrapper>
		<Avatar size='large' isLoading />
		<Avatar size='large' src='https://ianbotham.com/wp-content/uploads/2018/05/user-avatar-6.png' />
		<Avatar size='large' />
	</StoryWrapper>
);

export const Huge = () => (
	<StoryWrapper>
		<Avatar size='huge' isLoading />
		<Avatar size='huge' src='https://ianbotham.com/wp-content/uploads/2018/05/user-avatar-6.png' />
		<Avatar size='huge' />
	</StoryWrapper>
);
