import React from 'react';

//appending this to a component determines the theme in css
export const themes = {
    light: 'light',
    dark: 'dark'
};

export const ThemeContext = React.createContext({
    theme: themes.dark, 
    toggleTheme: () => {},
});