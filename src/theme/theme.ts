import { createTheme } from '@mui/material/styles';

const OW_ORANGE = '#F99E1A';
const OW_BLUE = '#00B4FF';

const typographyBase = {
  fontFamily: 'var(--font-geist-sans), "Noto Sans KR", sans-serif',
  h1: { fontWeight: 900, letterSpacing: '0.01em', lineHeight: 1.05 },
  h2: { fontWeight: 800, letterSpacing: '0.04em', lineHeight: 1.15 },
  h3: { fontWeight: 700, letterSpacing: '0.02em', lineHeight: 1.3 },
  h4: { fontWeight: 700, letterSpacing: '0.02em' },
  h5: { fontWeight: 600 },
  h6: { fontWeight: 700, letterSpacing: '0.01em' },
  overline: { fontWeight: 700, letterSpacing: '0.18em', fontSize: '0.7rem' },
  body1: { lineHeight: 1.75 },
  body2: { lineHeight: 1.65 },
  button: { textTransform: 'none' as const, fontWeight: 700, letterSpacing: '0.05em' },
  caption: { letterSpacing: '0.06em' },
};

// ── Light (default) theme — white / green ─────────────────────────────
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#43A047',
      light: '#76D275',
      dark: '#00701A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2332',
      secondary: '#64748B',
    },
    divider: '#E2E8F0',
    error: { main: '#D32F2F' },
  },
  typography: typographyBase,
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: '#F8FAFC' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          fontWeight: 700,
          borderRadius: 8,
          padding: '10px 24px',
          letterSpacing: '0.05em',
          transition: 'all 0.2s ease',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(46,125,50,0.3)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          '&:hover': { backgroundColor: 'rgba(46,125,50,0.06)' },
        },
        sizeSmall: { padding: '6px 14px' },
        sizeLarge: { padding: '14px 32px', fontSize: '1rem' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
          border: '1px solid #E2E8F0',
          backgroundImage: 'none',
          transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 32px rgba(46,125,50,0.12)',
            borderColor: '#4CAF50',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          fontSize: '0.78rem',
          letterSpacing: '0.04em',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { boxShadow: 'none', backgroundImage: 'none' } },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: '#E2E8F0' } },
    },
    MuiDrawer: {
      styleOverrides: { paper: { backgroundImage: 'none' } },
    },
  },
});

// ── Dark (Overwatch) theme — orange / blue ────────────────────────────
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: OW_ORANGE,
      light: '#FFB84D',
      dark: '#D4820A',
      contrastText: '#0A0E1A',
    },
    secondary: {
      main: OW_BLUE,
      light: '#4DCCFF',
      dark: '#0090CC',
      contrastText: '#0A0E1A',
    },
    background: {
      default: '#080C16',
      paper: '#0D1426',
    },
    text: {
      primary: '#E2E8F0',
      secondary: '#7C8FA6',
    },
    divider: '#1E2D4A',
    error: { main: '#FF4B4B' },
  },
  typography: typographyBase,
  shape: { borderRadius: 2 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: '#080C16' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          fontWeight: 700,
          borderRadius: 0,
          padding: '10px 24px',
          letterSpacing: '0.05em',
          transition: 'all 0.2s ease',
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
        },
        contained: {
          background: `linear-gradient(135deg, #FFB84D 0%, ${OW_ORANGE} 60%, #D4820A 100%)`,
          boxShadow: `0 0 20px rgba(249,158,26,0.3)`,
          color: '#0A0E1A',
          '&:hover': {
            background: `linear-gradient(135deg, #FFC96A 0%, ${OW_ORANGE} 60%, #E5920C 100%)`,
            boxShadow: `0 0 32px rgba(249,158,26,0.55)`,
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: OW_ORANGE,
          color: OW_ORANGE,
          '&:hover': {
            borderColor: '#FFB84D',
            backgroundColor: 'rgba(249,158,26,0.08)',
            boxShadow: `0 0 16px rgba(249,158,26,0.2)`,
          },
        },
        sizeSmall: {
          padding: '6px 14px',
          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1px solid #1E2D4A',
          backgroundColor: '#0D1426',
          backgroundImage: 'none',
          transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            borderColor: OW_ORANGE,
            transform: 'translateY(-3px)',
            boxShadow: `0 8px 32px rgba(249,158,26,0.12), inset 0 0 0 1px rgba(249,158,26,0.12)`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 600,
          fontSize: '0.78rem',
          letterSpacing: '0.04em',
        },
        outlined: {
          borderColor: '#1E2D4A',
          color: '#7C8FA6',
          '&:hover': {
            borderColor: OW_ORANGE,
            color: OW_ORANGE,
            backgroundColor: 'rgba(249,158,26,0.06)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#1E2D4A' },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0D1426',
          backgroundImage: 'none',
          borderLeft: '1px solid #1E2D4A',
        },
      },
    },
  },
});

export default lightTheme;
