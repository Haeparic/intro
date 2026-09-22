'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '@/theme/theme';

interface ThemeToggleContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

type ThemePreference = 'light' | 'dark' | 'system';
const THEME_STORAGE_KEY = 'portfolio-theme-preference';

export const ThemeToggleContext = createContext<ThemeToggleContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [themePreference, setThemePreference] = useState<ThemePreference>('system');
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    const initializationFrame = window.requestAnimationFrame(() => {
      const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        setThemePreference(saved);
      }
      setSystemPrefersDark(mediaQuery.matches);
      setThemeReady(true);
    });

    return () => {
      window.cancelAnimationFrame(initializationFrame);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);
  }, [themePreference, themeReady]);

  const isDark = useMemo(
    () => themePreference === 'dark' || (themePreference === 'system' && systemPrefersDark),
    [themePreference, systemPrefersDark],
  );

  const toggleTheme = () => {
    setThemePreference((prev) => {
      if (prev === 'system') {
        return systemPrefersDark ? 'light' : 'dark';
      }
      return prev === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <ThemeToggleContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
