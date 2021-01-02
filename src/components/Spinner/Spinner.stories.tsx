import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { StoryWrapper } from '../common/utils';

import { Spinner, SpinnerProps } from './index';

export default {
	title: 'Components/Spinner',
	component: Spinner,
} as Meta;

export const Basic = (args: SpinnerProps) => <Spinner {...args} />;

export const Colors = () => (
	<StoryWrapper>
		<Spinner color='primary' />
		<Spinner color='secondary' />
		<Spinner color='tertiary' />
		<Spinner color='positive' />
		<Spinner color='negative' />
		<Spinner color='tertiary' />
		<Spinner color='warning' />
		<Spinner color='white' />
		<Spinner color='light' />
		<Spinner color='dark' />
		<Spinner color='darker' />
		<Spinner color='black' />
	</StoryWrapper>
);

export const Sizes = () => (
	<StoryWrapper>
		<Spinner size='small' />
		<Spinner size='normal' />
		<Spinner size='large' />
		<Spinner size='huge' />
	</StoryWrapper>
);

export const Rotation = () => (
	<StoryWrapper>
		<Spinner />
		<Spinner reversed />
	</StoryWrapper>
);
