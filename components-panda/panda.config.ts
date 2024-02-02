import { webPandaPreset } from './src/webPandaPreset';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  presets: ['@pandacss/dev/presets', webPandaPreset],
  conditions: {
    cafeyn: '[data-theme=cafeyn] & ',
    blendle: '[data-theme=blendle] &',
  },
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
  emitPackage: true,
});
