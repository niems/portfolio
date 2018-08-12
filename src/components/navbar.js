import React, {Component} from 'react';
import {ThemeContext} from '../theme-context';
import './style/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    <nav className={`navbar-container ${theme.name}`} >
                        <ul>
                            <li className='navbar-item'>
                                <a className='navbar-link-container' id='home-link' href='#home' onClick={this.props.selection}>
                                    <img className={`navbar-icon ${theme.name}`} src='./images/home-icon.svg' alt='failed to load home icon D:' />
                                    <span className={`icon-text ${theme.name}`}>Home</span>
                                </a>
                            </li>
                            <li className='navbar-item'>
                                <a className='navbar-link-container' id='experience-link' href='#experience' onClick={this.props.selection}>
                                    <img className={`navbar-icon ${theme.name}`} src='./images/build-icon.svg' alt='failed to load build icon D:' />
                                    <span className={`icon-text ${theme.name}`}>Experience</span>
                                </a>
                            </li>
                            <li className='navbar-item'>
                                <a className='navbar-link-container' id='projects-link' href='#projects' onClick={this.props.selection}>
                                    <img className={`navbar-icon ${theme.name}`} src='./images/code-icon.svg' alt='failed to load code icon D:' />
                                    <span className={`icon-text ${theme.name}`}>Projects</span>
                                </a>
                            </li>
                            <li className='navbar-item'>
                                <a className='navbar-link-container' id='contact-link' href='#contact' onClick={this.props.selection}>
                                    <img className={`navbar-icon ${theme.name}`} src='./images/chat-icon.svg' alt='failed to load chat icon D:' />
                                    <span className={`icon-text ${theme.name}`}>Contact</span>
                                </a>
                            </li>

                            <span id='color-theme-container' onClick={toggleTheme}>
                                <img className={`color-theme-img ${theme.name}`} src='./images/theme-adjust.svg' alt='color theme icon not displayed D:' />
                            </span>
                        </ul>
                    </nav>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;