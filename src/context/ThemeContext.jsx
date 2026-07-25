import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem('kis-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Accessibility States
  const [fontSize, setFontSizeState] = useState(() => {
    return localStorage.getItem('kis-font-size') || 'normal';
  });

  const [highContrast, setHighContrastState] = useState(() => {
    return localStorage.getItem('kis-high-contrast') === 'true';
  });

  const [dyslexiaFont, setDyslexiaFontState] = useState(() => {
    return localStorage.getItem('kis-dyslexia-font') === 'true';
  });

  // Sync theme attribute on documentElement
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('kis-theme', theme);
    } catch (e) {}
  }, [theme]);

  // Sync accessibility classes and root font sizing on documentElement & document.body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Font size root scaling (scales all rem typography globally)
    root.classList.remove('font-size-lg', 'font-size-xl');
    body.classList.remove('font-size-lg', 'font-size-xl');

    if (fontSize === 'large') {
      root.classList.add('font-size-lg');
      body.classList.add('font-size-lg');
      root.style.fontSize = '18px';
    } else if (fontSize === 'xlarge') {
      root.classList.add('font-size-xl');
      body.classList.add('font-size-xl');
      root.style.fontSize = '20px';
    } else {
      root.style.fontSize = '16px';
    }
    try {
      localStorage.setItem('kis-font-size', fontSize);
    } catch (e) {}

    // High contrast mode
    if (highContrast) {
      body.classList.add('high-contrast');
      root.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
      root.classList.remove('high-contrast');
    }
    try {
      localStorage.setItem('kis-high-contrast', String(highContrast));
    } catch (e) {}

    // Dyslexia font mode
    if (dyslexiaFont) {
      body.classList.add('dyslexia-font');
      root.classList.add('dyslexia-font');
    } else {
      body.classList.remove('dyslexia-font');
      root.classList.remove('dyslexia-font');
    }
    try {
      localStorage.setItem('kis-dyslexia-font', String(dyslexiaFont));
    } catch (e) {}

  }, [fontSize, highContrast, dyslexiaFont]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setFontSize = (size) => {
    setFontSizeState(size);
  };

  const toggleHighContrast = () => {
    setHighContrastState(prev => !prev);
  };

  const toggleDyslexiaFont = () => {
    setDyslexiaFontState(prev => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        fontSize,
        setFontSize,
        highContrast,
        toggleHighContrast,
        dyslexiaFont,
        toggleDyslexiaFont
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
