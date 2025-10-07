import React from 'react';
import useTheme from '../hooks/useTheme';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme} className="change-mode">
      ☼ / ☾
    </button>
  );
};

export default ThemeToggle;
