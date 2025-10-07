import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  
  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
      updateThemeElements(true);
    } else {
      updateThemeElements(false);
    }
  }, []);
  
  const updateThemeElements = (isLight) => {
    const changeModeBtn = document.querySelector(".change-mode");
    const themeLogoImg = document.querySelector(".logo");
    const h1Text = document.querySelectorAll("h1");
    const missionStatementText = document.querySelector(".mission-statement");
    const taskbarText = document.querySelectorAll(".taskbar-text");
    
    if (changeModeBtn) {
      changeModeBtn.textContent = isLight ? "☼" : "☾";
    }
    
    if (themeLogoImg) {
      themeLogoImg.src = isLight 
        ? "assets/logos/indigologoblack.png"
        : "assets/logos/indigologowhite.png";
    }
    
    h1Text.forEach(text => text.style.color = isLight ? "black" : "white");
    
    if (missionStatementText) {
      missionStatementText.style.color = isLight ? "#51289C" : "#C19EEA";
    }
    
    taskbarText.forEach(text => text.style.color = isLight ? "black" : "white");
    document.body.style.backgroundColor = isLight ? "white" : "black";
  };
  
  const toggleTheme = () => {
    const newTheme = !isLightMode;
    setIsLightMode(newTheme);
    
    // Apply theme to body
    document.body.classList.toggle('light-mode');
    
    // Update all theme elements
    updateThemeElements(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme ? 'light' : 'dark');
  };
  
  return { isLightMode, toggleTheme };
};

export default useTheme;
