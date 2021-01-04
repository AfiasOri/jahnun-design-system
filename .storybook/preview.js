import { GlobalStyle } from '../src/components/common/global';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};

const withGlobalStyle = storyFn => (
	<>
		<GlobalStyle />
		{storyFn()}
	</>
);

export const decorators = [withGlobalStyle];
