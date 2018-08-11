import React, { Component } from 'react';
import Layout from './components/layout';
import { ThemeContext, themes } from './theme-context';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState({
        theme: this.state.theme === themes.dark 
        ? themes.light
        : themes.dark
      });
    };

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        toggleTheme: this.state.toggleTheme
        }
      }>
        <Layout />
      </ThemeContext.Provider>
    );
  }
}

export default App;
