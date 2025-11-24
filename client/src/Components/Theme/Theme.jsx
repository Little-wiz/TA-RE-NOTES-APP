import React, { useEffect, useState } from 'react';
import ThemeItems from './ThemeItems';
import { FaCog } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
import "./Themes.css";

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  return theme;
}

const Themes = () => {
  const [ theme, setTheme ] = useState(getStorageTheme());


  const toggleTheme = () => {
  if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme');
    }
  };


  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
     <div className="theme_toggler" onClick={toggleTheme}>
      {theme === "light-theme" ? <BsMoon /> : <BsSun />}
    </div>
  )
}

export default Themes;