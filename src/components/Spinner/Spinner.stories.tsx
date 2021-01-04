import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { StoryWrapper } from '../common/utils';

import { Spinner, SpinnerProps } from './index';

export default {
	title: 'Components/Spinner',
	component: Spinner,
} as Meta;

export const Basic = (args: SpinnerProps) => <Spinner {...args} />;

export const Small = () => (
	<StoryWrapper>
		<Spinner size='small' color='primary' />
		<Spinner size='small' color='secondary' />
		<Spinner size='small' color='tertiary' />
		<Spinner size='small' color='positive' />
		<Spinner size='small' color='negative' />
		<Spinner size='small' color='tertiary' />
		<Spinner size='small' color='warning' />
		<Spinner size='small' color='white' />
		<Spinner size='small' color='light' />
		<Spinner size='small' color='dark' />
		<Spinner size='small' color='darker' />
		<Spinner size='small' color='black' />
	</StoryWrapper>
);

export const Normal = () => (
	<StoryWrapper>
		<Spinner size='normal' color='primary' />
		<Spinner size='normal' color='secondary' />
		<Spinner size='normal' color='tertiary' />
		<Spinner size='normal' color='positive' />
		<Spinner size='normal' color='negative' />
		<Spinner size='normal' color='tertiary' />
		<Spinner size='normal' color='warning' />
		<Spinner size='normal' color='white' />
		<Spinner size='normal' color='light' />
		<Spinner size='normal' color='dark' />
		<Spinner size='normal' color='darker' />
		<Spinner size='normal' color='black' />
	</StoryWrapper>
);

export const Large = () => (
	<StoryWrapper>
		<Spinner size='large' color='primary' />
		<Spinner size='large' color='secondary' />
		<Spinner size='large' color='tertiary' />
		<Spinner size='large' color='positive' />
		<Spinner size='large' color='negative' />
		<Spinner size='large' color='tertiary' />
		<Spinner size='large' color='warning' />
		<Spinner size='large' color='white' />
		<Spinner size='large' color='light' />
		<Spinner size='large' color='dark' />
		<Spinner size='large' color='darker' />
		<Spinner size='large' color='black' />
	</StoryWrapper>
);

export const Huge = () => (
	<StoryWrapper>
		<Spinner size='huge' color='primary' />
		<Spinner size='huge' color='secondary' />
		<Spinner size='huge' color='tertiary' />
		<Spinner size='huge' color='positive' />
		<Spinner size='huge' color='negative' />
		<Spinner size='huge' color='tertiary' />
		<Spinner size='huge' color='warning' />
		<Spinner size='huge' color='white' />
		<Spinner size='huge' color='light' />
		<Spinner size='huge' color='dark' />
		<Spinner size='huge' color='darker' />
		<Spinner size='huge' color='black' />
	</StoryWrapper>
);

export const Rotation = () => (
	<StoryWrapper>
		<Spinner />
		<Spinner reversed />
	</StoryWrapper>
);
