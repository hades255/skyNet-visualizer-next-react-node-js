import React, { useContext } from 'react';
import { ThemeContext, themes } from '../../context/ThemeContext';

const ThemeSwitchButton: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeSwitchButton must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;

  const switchTheme = () => {
    setTheme(theme === themes.theme1 ? themes.theme2 : themes.theme1);
  };

  return (
    <button className="bg-white" onClick={switchTheme}>
      Switch Theme
    </button>
  );
};

export default ThemeSwitchButton;
