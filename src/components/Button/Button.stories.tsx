import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { StoryWrapper } from '../common/utils';

import { Button, ButtonProps } from './index';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

export const Basic = (args: ButtonProps) => <Button {...args} />;
Basic.args = { children: 'Button' };

export const Colors = () => (
	<StoryWrapper>
		<Button color='primary'>Primary</Button>
		<Button color='secondary'>Secondary</Button>
		<Button color='tertiary'>Tertiary</Button>
		<Button color='positive'>Positive</Button>
		<Button color='negative'>Negative</Button>
		<Button color='tertiary'>Tertiary</Button>
		<Button color='warning'>Warning</Button>
		<Button color='white'>White</Button>
		<Button color='light'>Light</Button>
		<Button color='dark'>Dark</Button>
		<Button color='darker'>Darker</Button>
		<Button color='black'>Black</Button>
	</StoryWrapper>
);

export const Sizes = () => (
	<StoryWrapper>
		<Button size='small'>Small</Button>
		<Button size='normal'>Normal</Button>
		<Button size='large'>Large</Button>
		<Button size='huge'>Huge</Button>
	</StoryWrapper>
);

export const Inverted = () => (
	<StoryWrapper>
		<Button>Regular</Button>
		<Button inverted>Inverted</Button>
	</StoryWrapper>
);

export const Disabled = () => (
	<StoryWrapper>
		<Button>Regular</Button>
		<Button disabled>Disabled</Button>
	</StoryWrapper>
);
