import React, { Component } from 'react';
import View from './components/view';
import { ThemeContext, themes } from './theme-context';
import './App.css';

import 'particles.js/particles';  
const particlesJS = window.particlesJS;  

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      theme: {
        name: 'light-blue',
        path: './themes/light-blue-theme.css'
      }
    };
    
    this.themeRef = undefined; 
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  componentDidMount(){
    particlesJS.load("particles-js", './particles.json');
  }

  toggleTheme() {
    const theme = this.state.theme.name === themes.dark.name //new theme
                     ? themes.light
                     : themes.dark;

    this.themeRef.href = theme.path; //updates the path for the new theme
    this.setState({ theme }); 
  }

  render() {
   return (
      <ThemeContext.Provider value={{
        theme: this.state.theme,
        toggleTheme: this.toggleTheme
        }}>

          <link rel="stylesheet" href={this.state.theme.path} ref={e => {this.themeRef = e;} } />
          <div id="particles-js"></div>
          <View />
        
      </ThemeContext.Provider>
    );
  }
}

export default App;