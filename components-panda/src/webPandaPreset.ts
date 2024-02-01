import { defineTextStyles, definePreset, defineRecipe } from '@pandacss/dev';

const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
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
  defaultVariants: {
    visual: 'primary',
    size: 'sm',
  },
});
const textStyles = defineTextStyles({
  hero: {
    description: 'Only on desktop',
    value: {
      fontSize: '50px',
      fontFamily: 'primary',
      letterSpacing: '-2.5',
      lineHeight: '62px',
    },
  },
  h1: {
    value: {
      fontSize: '26px',
      fontFamily: 'soleilSemiBold',
      letterSpacing: '-1px',
      lineHeight: '34px',
    },
  },
  h2: {
    value: {
      fontSize: '24px',
      fontFamily: 'primary',
      letterSpacing: '-1px',
      lineHeight: '24px',
    },
  },
  h3: {
    value: {
      fontSize: '22px',
      fontFamily: 'primary',
      letterSpacing: '-0.6px',
      lineHeight: '32px',
    },
  },
  h4: {
    value: {
      fontSize: '16px',
      fontFamily: 'primary',
      letterSpacing: '-0.2px',
      lineHeight: '22px',
    },
  },
  section: {
    value: {
      fontSize: '16px',
      fontFamily: 'soleilSemiBold',
      letterSpacing: '-0.2',
      lineHeight: '22px',
    },
  },
  body: {
    value: {
      fontSize: '14px',
      fontFamily: 'primary',
      letterSpacing: '-0.2',
      lineHeight: '22px',
    },
  },
  bodyMax: {
    value: {
      fontSize: '18px',
      fontFamily: 'primary',
      letterSpacing: '-0.4',
      lineHeight: '20px',
    },
  },
  item: {
    description: 'Never use if sentence is bigger than 2 words',
    value: {
      fontSize: '12px',
      fontFamily: 'primary',
      letterSpacing: '0.2',
      lineHeight: '22px',
    },
  },
  intro: {
    description: 'Never use if sentence is bigger than 2 words',
    value: {
      fontSize: '12px',
      fontFamily: 'primary',
      letterSpacing: '0.4',
      lineHeight: '14px',
    },
  },
  mark: {
    description: 'Never use if sentence is bigger than 2 words',
    value: {
      fontSize: '12px',
      fontFamily: 'soleilBold',
      letterSpacing: '0.2',
      lineHeight: '18px',
    },
  },
  info: {
    value: {
      fontSize: '14px',
      fontFamily: 'soleilSemiBold',
      letterSpacing: '-0.4',
      lineHeight: '22px',
    },
  },
  tiny: {
    value: {
      fontSize: '12px',
      fontFamily: 'soleilSemiBold',
      lineHeight: '22px',
    },
  },
  label: {
    description: 'Associated with user action',
    value: {
      fontSize: '18px',
      fontFamily: 'primary',
      letterSpacing: '-0.6',
      lineHeight: '26px',
    },
  },
  tab: {
    value: {
      fontSize: '16px',
      fontFamily: 'soleilSemiBold',
      letterSpacing: '-0.4',
      lineHeight: '22px',
    },
  },
  tabNav: {
    value: {
      fontSize: '10px',
      fontFamily: 'soleilSemiBold',
      lineHeight: '14px',
    },
  },
  ceading1: {
    value: {
      fontSize: '50px',
      fontFamily: 'secondary',
      letterSpacing: '-2.5',
      lineHeight: '62px',
    },
  },
  ceading2: {
    value: {
      fontSize: '34px',
      fontFamily: 'secondary',
      letterSpacing: '-0.6',
      lineHeight: '38px',
    },
  },
  ceading3: {
    value: {
      fontSize: '28px',
      fontFamily: 'secondary',
      letterSpacing: '-0.6',
      lineHeight: '38px',
    },
  },
  ceading4: {
    value: {
      fontSize: '24px',
      fontFamily: 'secondary',
      letterSpacing: '-0.6',
      lineHeight: '32px',
    },
  },
});

const extendTheme = {
  semanticTokens: {
    fonts: {
      primary: {
        value: {
          _blue: {
            value: 'var(--font-soleil-regular)',
          },
          _rose: {
            value: 'var(--font-gt-walsheim-bold)',
          },
        },
      },
      secondary: {
        value: {
          _blue: {
            value: 'var(--font-lyon-black)',
          },
          _rose: {
            value: 'var(--font-lyon-black)',
          },
        },
      },
      soleilSemiBold: {
        value: {
          _blue: {
            value: 'var(--font-soleil-semiBold)',
          },
          _rose: {
            value: 'var(--font-soleil-semiBold)',
          },
        },
      },
      soleilBold: {
        value: {
          _blue: {
            value: 'var(--font-soleil-bold)',
          },
          _rose: {
            value: 'var(--font-soleil-bold)',
          },
        },
      },
    },
    colors: {
      primary: {
        value: {
          _blue: { _osLight: '#1d73a5', _osDark: '#1d73a5' },
          _rose: {
            _osLight: '#000000',
            _osDark: '#000000',
          },
        },
      },
      secondary: {
        value: {
          _blue: {
            _osLight: '#fedc84',
            _osDark: '#000000',
          },
          _rose: {
            _osLight: '#ff1060',
            _osDark: '#000000',
          },
        },
      },
    },
  },

  textStyles,
};

export const webPandaPreset = definePreset({
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    extend: extendTheme,
  },
});
