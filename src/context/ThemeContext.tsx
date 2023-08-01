import React from 'react';

export const themes = {
  theme1: 'theme1',
  theme2: 'theme2',
};

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(
  undefined
);
