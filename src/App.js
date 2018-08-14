import React, { Component } from 'react';
//import Layout from './components/layout';
import View from './components/view';
import { ThemeContext, themes } from './theme-context';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      theme: {
        name: 'light-theme',
        path: './themes/light-theme.css'
      }
    };
    
    this.themeRef = undefined; 
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    //console.log(`old theme: ${this.state.theme.name}`);
    const theme = this.state.theme.name === themes.dark.name //new theme
                     ? themes.light
                     : themes.dark;

    this.themeRef.href = theme.path; //updates the path for the new theme
    this.setState({ theme }); 

    //console.log(`new theme: ${theme.name}\n\n`);
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        toggleTheme: this.toggleTheme
        }}>

        <link rel="stylesheet" href={this.state.theme.path} ref={e => {this.themeRef = e;} } />
        <View />

      </ThemeContext.Provider>
    );
  }
}

export default App;
