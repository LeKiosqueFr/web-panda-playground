import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/index.css';

import type { Preview } from '@storybook/vue3';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      cafeyn: 'cafeyn',
      blendle: 'blendle',
    },
    defaultTheme: 'cafeyn',
    attributeName: 'data-theme',
  }),
];
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
