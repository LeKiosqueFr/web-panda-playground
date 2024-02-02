<script setup lang="ts">
import { cx } from '../../styled-system/css';

/*
import { cva } from '../../styled-system/css';

const buttonRecipe = cva({
  base: {
    fontFamily: 'soleilBold',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  variants: {
    visual: {
      primary: {
        bg: 'primary',
        color: 'white',
      },
      secondary: { bg: 'secondary' },
      outlinePrimary: { borderWidth: '1px', borderColor: 'primary' },
      outlineSecondary: { borderWidth: '1px', borderColor: 'secondary' },
      link: { textDecoration: 'underline', color: 'black' },
      lightCorner: { color: 'white', bg: 'primary', textTransform: 'normal' },
    },
    size: {
      sm: {
        height: '8',
        padding: '0rem 2.375rem',
        fontSize: 'xs',
        borderRadius: '1rem',
      },
      md: {
        height: '9',
        padding: '0rem 3.0625rem',
        fontSize: '0.6875rem',
        borderRadius: '1rem',
      },
      lg: {
        height: '2.875rem',
        padding: '0rem 3.375rem',
        fontSize: '0.8125rem',
        borderRadius: '1.5rem',
      },
      xl: {
        height: '3.75rem',
        padding: '0rem 5rem',
        fontSize: 'sm',
        borderRadius: '2rem',
      },
    },
  },
});
type ButtonCVAProps = NonNullable<Parameters<typeof buttonRecipe>[0]>; // { variant: string; size: string; }

interface IProps {
  visual?: ButtonCVAProps['visual'];
  size?: ButtonCVAProps['size'];
  label: string;
}
*/

import { button, type ButtonVariantProps } from 'styled-system/recipes';

interface ButtonProps extends /** @vue-ignore */ ButtonVariantProps {}

defineProps<{
  label: string;
  visual: ButtonProps['visual'];
  size: ButtonProps['size'];
}>();
</script>

<template>
  <button type="button" :class="cx(button({ visual: visual, size: size }))">
    {{ label }}
  </button>
</template>
