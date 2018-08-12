import React from 'react';

//appending this to a component determines the theme in css
export const themes = {
    light: {
        name: 'light-theme',
        path: './themes/light-theme.css'
    },
    dark: {
        name: 'dark-theme',
        path: './themes/dark-theme.css'
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark, 
    toggleTheme: () => {},
});