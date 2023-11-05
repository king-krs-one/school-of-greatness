import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

export const colors = {
  primary: "#343a40",
  secondary: "#6c757d",

  light: "#f8f9fa",
  dark: "#212529",

  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#198754",
  teal: "#20c997",
  cyan: "#0dcaf0",
  black: "#000",
  white: "#fff",
  gray: "#6c757d",
  
  'gray-dark': '#343a40',
  'grayLight': '#ced4da',
  'gray-100': '#f8f9fa',
  'gray-200': '#e9ecef',
  'gray-300': '#dee2e6',
  'gray-400': '#ced4da',
  'gray-500': '#adb5bd',
  'gray-600': '#6c757d',
  'gray-700': '#495057',
  'gray-800': '#343a40',
  'gray-900': '#212529',

  // not commonly used, a field with color bg will normally have white text color
  // used e.g. for active text field label
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
  error: "#dc3545",
};

export const shared = {
  base: {
    height: '48px',
    lineHeight: '1.2rem',
    fontSize: '1rem',
    fontWeight: 'light',
    borderRadius: '0.5rem',
  },
  small: {
    fontSize: '0.85rem',
    height: '36px',
    lineHeight: '1rem',
  },
  color: {
    text: colors.primary,
    background: colors.white,
  },
  border: {
    default: `2px solid ${colors.grayLight}`,
    active: `2px solid ${colors.blue}`,
    hover: `2px solid ${colors.blue}`,
    error: `2px solid ${colors.error}`,
    success: `2px solid ${colors.success}`,
    warning: `2px solid ${colors.warning}`,
  },
  transition: {
    all: 'all 0.2s',
    base: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
    borderColor: 'border-color .15s ease-in-out',
    boxShadow: 'box-shadow .15s ease-in-out',
  },
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
      },
      textColor: {
        primary: colors.primary,
      },
      backgroundColor: {
        primary: colors.white,
      },
      borderColor: {
        primary: colors.grayLight,
      },
      input: {
        base: {
          color: shared.color.text,
          backgroundColor: shared.color.background,
          border: shared.border.default,
          borderRadius: shared.base.borderRadius,
          height: shared.base.height,
          lineHeight: shared.base.lineHeight,
          fontSize: shared.base.fontSize,
          fontWeight: shared.base.fontWeight,
          transition: shared.transition.base,
        },
        small: {
          fontSize: '0.85rem',
          height: '36px',
          lineHeight: '1rem',
        },
        label: {
           ... {
            position: 'absolute',
            top: `calc(${shared.base.height} / 2)`, // half of input height
            left: '18px',
            pointerEvents: 'none',
            transform: 'translateY(-50%)',
            opacity: '0.6',
          },
          base: {
            fontSize: shared.base.fontSize,
            fontWeight: shared.base.fontWeight,
            transition: shared.transition.all,
          },
          small: {
            fontSize: shared.small.fontSize,
          },
          states: {
            focus: {
              fontSize: '12px',
              fontWeight: 'normal',
            },
            error: {
              color: colors.error,
            },
          },
        },
        // hover: {},
        // active: {},
        // focus: {},
        // error: {},
      },
      select: {
        default: {

        },
        base: {
          color: shared.color.text,
          backgroundColor: shared.color.background,
          border: shared.border.default,
          borderRadius: shared.base.borderRadius,
          height: shared.base.height,
          lineHeight: shared.base.lineHeight,
          fontSize: shared.base.fontSize,
          fontWeight: shared.base.fontWeight,
          transition: shared.transition.base,
        },
        small: {
          fontSize: '0.85rem',
          height: '36px',
          lineHeight: '1rem',
        },
        menu: {

        },
        item: {

        },
        hover: {},
        active: {},
        focus: {},
        error: {},
      },
    },
  },
  variants: {
    extend: {
      // input: ["hover", "focus", "active"],
      select: ["hover", "focus", "active"],
      // backgroundColor: ["responsive", "hover", "focus", "active"],
      // borderColor: ["responsive", "hover", "focus", "active"],
      // textColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.input': {
          color: 'red',
        },
      })
    })
  ],
};
export default config;
