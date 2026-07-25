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

  // Sync accessibility classes on document.body
  useEffect(() => {
    const body = document.body;
    
    // Font size classes
    body.classList.remove('font-size-lg', 'font-size-xl');
    if (fontSize === 'large') body.classList.add('font-size-lg');
    if (fontSize === 'xlarge') body.classList.add('font-size-xl');
    localStorage.setItem('kis-font-size', fontSize);

    // High contrast class
    if (highContrast) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
    localStorage.setItem('kis-high-contrast', highContrast);

    // Dyslexia font class
    if (dyslexiaFont) {
      body.classList.add('dyslexia-font');
    } else {
      body.classList.remove('dyslexia-font');
    }
    localStorage.setItem('kis-dyslexia-font', dyslexiaFont);

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
