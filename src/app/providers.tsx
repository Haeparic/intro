'use client';

import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { lightTheme, darkTheme } from '@/theme/theme';

interface ThemeToggleContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggleContext = createContext<ThemeToggleContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeToggleContext.Provider value={{ isDark, toggleTheme: () => setIsDark((p) => !p) }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        {/* OW grid background — dark mode only */}
        {isDark && (
          <Box
            aria-hidden
            sx={{
              position: 'fixed',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(249,158,26,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(249,158,26,0.032) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        )}
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
