import { useState, useEffect } from 'react';
import { Theme } from '../types';

export const useTheme = () => {
  // Default to DARK for SSR consistency to avoid hydration mismatch
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    // This only runs on the client
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) {
        setTheme(storedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(Theme.DARK);
      } else {
        setTheme(Theme.LIGHT);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (theme === Theme.DARK) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  };

  return { theme, toggleTheme };
};