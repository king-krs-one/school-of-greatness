
import colors from "tailwindcss/colors"

export const customColors = {
  primary: colors.gray[900],
  secondary: colors.gray[800],

  light: colors.gray[100],
  dark: colors.gray[900],
  black: colors.black,
  white: colors.white,

  // colors have to be defined as object with DEFAULT,
  // otherwise tailwind default colors like red-500 would not be accessible anymore
  gray: { DEFAULT: colors.gray[600], },
  // blue: colors.blue[500],
  blue: { DEFAULT: colors.blue[500], },
  indigo: { DEFAULT: colors.indigo[700], },
  purple: { DEFAULT: colors.purple[500], },
  pink: { DEFAULT: colors.pink[500], },
  red: { DEFAULT: colors.red[500], },
  orange: { DEFAULT: colors.orange[500], },
  yellow: { DEFAULT: colors.yellow[500], },
  green: { DEFAULT: colors.green[500], },
  teal: { DEFAULT: colors.teal[500], },
  cyan: { DEFAULT: colors.cyan[500], },
  
  success: colors.green[500],
  info: colors.cyan[500],
  warning: colors.yellow[500],
  danger: colors.red[500],
  error: colors.red[500],

  subtle: {
    primary: colors.blue[200],
    secondary: colors.gray[200],
    success: colors.green[200],
    info: colors.cyan[200],
    warning: colors.yellow[200],
    error: colors.red[200],
    light: colors.gray[50],
    dark: colors.gray[600],
    gray: colors.gray[200],
  },

  emphasized: {
    primary: colors.blue[200],
    secondary: colors.gray[200],
    success: colors.green[200],
    info: colors.cyan[200],
    warning: colors.yellow[200],
    error: colors.red[200],
    light: colors.gray[50],
    dark: colors.gray[600],
    gray: colors.gray[200],
  },
}
