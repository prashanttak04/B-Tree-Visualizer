import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    primary: {
      main: '#0d9488', // Premium Teal
    },
    secondary: {
      main: '#f97316', // Orange highlight
    },
    blue: {
      main: '#0d9488', // Map custom blue calls to teal
    },
    orange: {
      main: '#f97316',
    },
    grey: {
      main: '#64748b',
    },
    lightBlue: {
      main: '#e2e8f0',
    },
    white: {
      main: '#ffffff',
    },
    red: {
      main: '#ef4444',
    },
    green: {
      main: '#10b981',
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
  },
});

export default theme;
