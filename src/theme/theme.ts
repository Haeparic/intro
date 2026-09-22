import { createTheme } from '@mui/material/styles';

const typographyBase = {
  fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  h1: { fontWeight: 800, letterSpacing: '0.005em', lineHeight: 1.04 },
  h2: { fontWeight: 700, letterSpacing: '0.01em', lineHeight: 1.2 },
  h3: { fontWeight: 700, letterSpacing: '0.01em', lineHeight: 1.3 },
  h4: { fontWeight: 700, letterSpacing: '0.01em' },
  h5: { fontWeight: 600 },
  h6: { fontWeight: 600 },
  body1: { lineHeight: 1.72 },
  body2: { lineHeight: 1.62 },
  button: { textTransform: 'none' as const, fontWeight: 600, letterSpacing: '0.02em' },
  caption: { letterSpacing: '0.04em' },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#111111', light: '#111111', dark: '#000000', contrastText: '#FFFFFF' },
    secondary: { main: '#5C5C5C', light: '#6A6A6A', dark: '#3C3C3C', contrastText: '#FFFFFF' },
    background: { default: '#FFFFFF', paper: '#FFFFFF' },
    text: { primary: '#111111', secondary: '#5C5C5C' },
    divider: '#DCDCDC',
    error: { main: '#D32F2F' },
  },
  typography: typographyBase,
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: { styleOverrides: { html: { scrollBehavior: 'smooth' }, body: { backgroundColor: '#FFFFFF' } } },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          '@media (min-width:600px)': { paddingLeft: 24, paddingRight: 24 },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          fontWeight: 600,
          borderRadius: 4,
          padding: '9px 20px',
          transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: '#111111',
          color: '#FFFFFF',
          '&:hover': { boxShadow: 'none', backgroundColor: '#2A2A2A' },
        },
        outlined: {
          borderColor: '#111111',
          color: '#111111',
          '&:hover': { backgroundColor: '#F5F5F5', borderColor: '#111111' },
        },
        sizeSmall: { padding: '6px 12px' },
        sizeLarge: { padding: '12px 24px', fontSize: '0.95rem' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: 'none',
          border: '1px solid #DCDCDC',
          backgroundImage: 'none',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
          '&:hover': { borderColor: '#111111', boxShadow: 'none' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.02em' },
        outlined: {
          borderColor: '#D0D0D0',
          color: '#5C5C5C',
          '&:hover': { borderColor: '#111111', color: '#111111', backgroundColor: '#F7F7F7' },
        },
      },
    },
    MuiAppBar: { styleOverrides: { root: { boxShadow: 'none', backgroundImage: 'none' } } },
    MuiDivider: { styleOverrides: { root: { borderColor: '#DCDCDC' } } },
    MuiDrawer: { styleOverrides: { paper: { backgroundImage: 'none', borderLeft: '1px solid #DCDCDC' } } },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F5F5F5', light: '#FFFFFF', dark: '#DADADA', contrastText: '#111111' },
    secondary: { main: '#B4B4B8', light: '#D0D0D3', dark: '#8D8D93', contrastText: '#111111' },
    background: { default: '#0F0F10', paper: '#131314' },
    text: { primary: '#F5F5F5', secondary: '#B4B4B8' },
    divider: '#303036',
    error: { main: '#FF6B6B' },
  },
  typography: typographyBase,
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: { styleOverrides: { html: { scrollBehavior: 'smooth' }, body: { backgroundColor: '#0F0F10' } } },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          '@media (min-width:600px)': { paddingLeft: 24, paddingRight: 24 },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          fontWeight: 600,
          borderRadius: 4,
          padding: '9px 20px',
          transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: '#F5F5F5',
          color: '#111111',
          '&:hover': { boxShadow: 'none', backgroundColor: '#DBDBDB' },
        },
        outlined: {
          borderColor: '#F5F5F5',
          color: '#F5F5F5',
          '&:hover': { backgroundColor: '#1D1D20', borderColor: '#F5F5F5' },
        },
        sizeSmall: { padding: '6px 12px' },
        sizeLarge: { padding: '12px 24px', fontSize: '0.95rem' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: 'none',
          border: '1px solid #303036',
          backgroundImage: 'none',
          backgroundColor: '#131314',
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
          '&:hover': { borderColor: '#F5F5F5', boxShadow: 'none' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.02em' },
        outlined: {
          borderColor: '#3A3A3F',
          color: '#B4B4B8',
          '&:hover': { borderColor: '#F5F5F5', color: '#F5F5F5', backgroundColor: '#1A1A1D' },
        },
      },
    },
    MuiAppBar: { styleOverrides: { root: { boxShadow: 'none', backgroundImage: 'none' } } },
    MuiDivider: { styleOverrides: { root: { borderColor: '#303036' } } },
    MuiDrawer: {
      styleOverrides: { paper: { backgroundImage: 'none', backgroundColor: '#131314', borderLeft: '1px solid #303036' } },
    },
  },
});

export default lightTheme;
