import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './index';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

const style = { margin: '0 5px' };

export const Basic = (args: ButtonProps) => <Button {...args} />;
Basic.args = { children: 'Button' };

export const Colors = () => (
	<>
		<Button style={style} color='primary'>
			Primary
		</Button>
		<Button style={style} color='secondary'>
			Secondary
		</Button>
		<Button style={style} color='tertiary'>
			Tertiary
		</Button>
	</>
);

export const Sizes = () => (
	<>
		<Button style={style} size='small'>
			Small
		</Button>
		<Button style={style} size='normal'>
			Normal
		</Button>
		<Button style={style} size='large'>
			Large
		</Button>
		<Button style={style} size='huge'>
			Huge
		</Button>
	</>
);

export const Inverted = () => (
	<>
		<Button style={style}>Regular</Button>
		<Button style={style} inverted>
			Inverted
		</Button>
	</>
);

export const Disabled = () => (
	<>
		<Button style={style}>Regular</Button>
		<Button style={style} disabled>
			Disabled
		</Button>
	</>
);
