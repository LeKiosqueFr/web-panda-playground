import { definePreset } from '@pandacss/dev';
import { colors } from '../config/colors';
import { textStyles } from '../config/textStyles';
import { fonts } from '../config/fonts';
import { recipes } from '../config/recipes/index';

const extendTheme = {
  semanticTokens: {
    fonts,
    colors,
  },
  textStyles,
};

export const webPandaPreset = definePreset({
  theme: {
    recipes,
    extend: extendTheme,
  },
});
