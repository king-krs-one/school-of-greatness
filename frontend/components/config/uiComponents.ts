// import { colors } from './uiBase';

const checkboxSizes = {
  xs: '12px',
  sm: '18px',
  md: '24px',
  lg: '32px',
  xl: '48px',
};

const iconFontSizes = {
  xs: '0.9rem',
  sm: '1.0rem',
  md: '1.2rem',
  lg: '1.8rem',
  xl: '2.4rem',
};

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
  
  grayDark: '#343a40',
  grayLight: '#ced4da',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',

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
    borderRadius: '0.25rem',
  },
  small: {
    height: '36px',
    lineHeight: '1rem',
    fontSize: '0.85rem',
  },
  color: {
    text: colors.primary,
    background: colors.white,
  },
  boxShadow: {
    default: `0 0 0 0.25rem rgba(206, 212, 218, 0.25)`,
    active: `0 0 0 0.25rem rgba(13, 110, 253, 0.25)`,
    hover: `0 0 0 0.25rem rgba(13, 110, 253, 0.25)`,
    error: `0 0 0 0.25rem rgba(220, 53, 69, 0.25)`,
    success: `0 0 0 0.25rem rgba(25, 135, 84, 0.25)`,
    warning: `0 0 0 0.25rem rgba(255, 193, 7, 0.25)`,
  },
  border: {
    default: `1px solid ${colors.grayLight}`,
    active: `1px solid ${colors.blue}`,
    hover: `1px solid ${colors.blue}`,
    error: `1px solid ${colors.error}`,
    success: `1px solid ${colors.success}`,
    warning: `1px solid ${colors.warning}`,
  },
  transition: {
    all: 'all 0.2s',
    base: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
    borderColor: 'border-color .15s ease-in-out',
    boxShadow: 'box-shadow .15s ease-in-out',
  },
};

const inputStyles = {
  base: {
    ...shared.base,
    color: 'red',
    backgroundColor: shared.color.background,
    border: shared.border.default,
    transition: shared.transition.base,
  },
  small: {
    fontSize: shared.small.fontSize,
    height: shared.small.height,
    lineHeight: shared.small.lineHeight,
  },
  states: {
    focus: {
      border: shared.border.active,
      boxShadow: shared.boxShadow.active ,
    },
    hover: {
      border: shared.border.hover,
    },
    error: {
      border: shared.border.error,
    },
  },
  label: {
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
};

const selectStyles = {
  base: {
    ...shared.base,
    color: shared.color.text,
    backgroundColor: shared.color.background,
    border: shared.border.default,
    transition: shared.transition.base,
  },
  small: {
    fontSize: shared.small.fontSize,
    height: shared.small.height,
    lineHeight: shared.small.lineHeight,
  },
  states: {
    focus: {
      border: shared.border.active,
    },
    hover: {
      border: shared.border.hover,
    },
    error: {
      border: shared.border.error,
    },
  },
  item: {
    color: shared.color.text,
    backgroundColor: colors.white,
    height: shared.base.height,
    states: {
      hover: {
        backgroundColor: colors.blue,
      },
      selected: {
        backgroundColor: colors.cyan,
      },
    },
  },
};

const textAreaStyles = {
  base: {
    color: shared.color.text,
    backgroundColor: shared.color.background,
  },
};

const checkboxStyles = {
  base: {
    width: checkboxSizes.md,
    height: checkboxSizes.md,
  },
  xs: {
    width: checkboxSizes.xs,
    height: checkboxSizes.xs,
  },
  sm: {
    width: checkboxSizes.sm,
    height: checkboxSizes.sm,
  },
  md: {
    width: checkboxSizes.md,
    height: checkboxSizes.md,
  },
  lg: {
    width: checkboxSizes.lg,
    height: checkboxSizes.lg,
  },
  xl: {
    width: checkboxSizes.xl,
    height: checkboxSizes.xl,
  },
};

const iconStyles = {
  base: {
    fontSize: iconFontSizes.md,
  },
  xs: {
    fontSize: iconFontSizes.xs,
  },
  sm: {
    fontSize: iconFontSizes.sm,
  },
  md: {
    fontSize: iconFontSizes.md,
  },
  lg: {
    fontSize: iconFontSizes.lg,
  },
  xl: {
    fontSize: iconFontSizes.xl,
  },
};

export const components = {
  shared,
  input: inputStyles,
  select: selectStyles,
  textArea: textAreaStyles,
  checkbox: checkboxStyles,
  icons: iconStyles,
};
