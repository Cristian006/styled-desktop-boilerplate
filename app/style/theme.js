import { createMuiTheme } from '@material-ui/core';

// if no theme settings present
// this will be the default theme config for application
export const defaultThemeConfig = {
  paletteType: 'dark',
  accentColor: '#e53935',
};

// Dark Theme is treated as the base theme object for application
const DarkTheme = {
  paletteType: 'dark',
  // add application specific theming attributes here...
  barBackgroundColor: '#141A1F',
  toolbarBackgroundColor: '#30373D',
  appBackgroundColor: '#1A2128',
  barColor: '#A6B5C5',
};

// Light Theme is just an override of the base dark theme
const LightTheme = {
  ...DarkTheme,
  paletteType: 'light',
  // add light theme specific overrides here...
  barBackgroundColor: '#eeeeee',
  barColor: undefined, // use default barColor for light theme set by frameless-titlebar
  toolbarBackgroundColor: '#e0e0e0',
  appBackgroundColor: '#fafafa',
};

// Material UI specific theme overrides with current theme
export const MuiTheme = theme => createMuiTheme({
  titlebarTheme: {
    // adding in frameless-titlebar specific theming
    barTheme: theme.paletteType,
    barBackgroundColor: theme.barBackgroundColor,
    menuHighlightColor: theme.accentColor,
  },
  // not insanely necessary but just to have it at
  // the root of the theme object for easy access ;)
  accentColor: theme.accentColor,
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: theme.toolbarBackgroundColor,
      }
    }
  },
  palette: {
    type: theme.paletteType,
    primary: {
      dark: theme.barBackgroundColor,
      main: theme.toolbarBackgroundColor,
    },
    background: {
      default: theme.appBackgroundColor,
      paper: theme.toolbarBackgroundColor,
    },
    secondary: {
      main: theme.accentColor,
    },
  },
});

export const getTheme = ({paletteType, accentColor}) => {
  // create muiTheme
  return MuiTheme((paletteType === 'dark') ? { ...DarkTheme, accentColor } : { ...LightTheme, accentColor });
};
