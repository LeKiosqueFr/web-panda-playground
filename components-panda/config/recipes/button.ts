import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    fontFamily: 'soleilBold',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'content.dark',
  },
  variants: {
    visual: {
      primary: {
        bg: 'brands.primary',
        color: 'content.white',
      },
      dark: {
        bg: 'content.dark',
        color: 'content.white',
      },
      secondary: { bg: 'brands.secondary' },
      outlinePrimary: { borderWidth: '1px', borderColor: 'brands.primary' },
      outlineSecondary: { borderWidth: '1px', borderColor: 'brands.secondary' },
      outlineDark: { borderWidth: '1px', borderColor: 'content.dark' },
      link: { textDecoration: 'underline', color: 'brands.black' },
      lightCorner: {
        bg: 'brands.primary',
        textTransform: 'normal',
      },
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
  defaultVariants: {
    visual: 'primary',
    size: 'sm',
  },
});
