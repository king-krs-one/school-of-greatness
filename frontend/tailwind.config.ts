import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"
// import colors from "tailwindcss/colors"
import { customColors } from "./tailwind.presets";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: customColors,
      textColor: ({ theme }) => ({
        primary: theme('colors.primary'),
        secondary: theme('colors.secondary'),
      }),
      backgroundColor: ({ theme }) => ({
        primary: theme('colors.white'),
        secondary: theme('colors.subtle.gray'),
      }),
      borderColor: ({ theme }) => ({
        primary: theme(`colors.gray.300`),
        secondary: theme('colors.gray.200'),
        hover: theme('colors.blue.DEFAULT'),
        focus: theme('colors.blue.DEFAULT'),
        active: theme('colors.blue.DEFAULT'),
        success: theme('colors.success'),
        info: theme('colors.info'),
        warning: theme('colors.warning'),
        error: theme('colors.error'),
      }),
      borderRadius: {
        base: '0.25rem',
        small: '0.2rem'
      }, 
    },
  },
  variants: {
    extend: {
      // input: ["hover", "focus", "active"],
      // select: ["hover", "focus", "active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      const config = {
        borders: {
          primary: `1px solid ${theme('borderColor.primary')}`,
          secondary: `1px solid ${theme('borderColor.secondary')}`,
          focus: `1px solid ${theme('borderColor.focus')}`,
          active: `1px solid ${theme('borderColor.active')}`,
          hover: `1px solid ${theme('borderColor.active')}`,
          error: `1px solid ${theme('borderColor.error')}`,
          success: `1px solid ${theme('borderColor.success')}`,
          warning: `1px solid ${theme('borderColor.warning')}`,
        },
        transitions: {
          all: 'all 0.2s',
          base: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
          borderColor: 'border-color .15s ease-in-out',
          boxShadow: 'box-shadow .15s ease-in-out',
        },
      }

      addComponents({
        '.input': {
          '&-base': {
            height: '3rem',
            lineHeight: '1.2rem',
            fontSize: '1rem',
            fontWeight: 'light',
            // border: `1px solid ${theme('borderColor.primary')}`,
            border: config.borders.primary,
            borderRadius: theme('borderRadius.base'),
            color: theme('textColor.primary'),
            backgroundColor: theme('backgroundColor.primary'),
            transition: config.transitions.base,
            outline: 'none'
          },
          '&-small': {
            fontSize: '0.85rem',
            height: '36px',
            lineHeight: '1rem',
          },
          '&-label': {
            fontSize: '1rem',
            fontWeight: 'normal',
            transition: theme('transitions.all'),
            position: 'absolute',
            top: `calc(3rem / 2)`, // half of input height
            left: '1rem',
            pointerEvents: 'none',
            transform: 'translateY(-50%)',
            opacity: '0.6',
            
            '&-small': {
              fontSize: '0.85rem',
            },
            '&-focus': {
              fontSize: '0.75rem',
              fontWeight: 'normal',
              color: theme('borderColor.focus'),
            },
            '&-error': {
              color: theme('colors.error'),
            },
          },
          '&-hover': {
            color: theme('textColor.primary'),
            backgroundColor: theme('backgroundColor.primary'),
            border: config.borders.hover,
          },
          '&-focus': {
            color: theme('colors.primary'),
            backgroundColor: theme('backgroundColor.primary'),
            border: config.borders.focus,
          },
        },
      })
    })
  ],
};
export default config;
