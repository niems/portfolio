import React, {Component} from 'react';
import {ThemeContext} from '../theme-context';
import './style/nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    <nav className={`nav-container ${theme.name}`} >
                        <ul>
                            <li className='nav-item'>
                                <a className='nav-link-container' id='home-link' href='#home' onClick={this.props.selection}>
                                    <span className={`icon-text ${theme.name}`}>Home</span>
                                    <img className={`nav-icon ${theme.name}`} src='./images/home-icon.svg' alt='failed to load home icon D:' />
                                </a>
                            </li>
                           
                        </ul>
                    </nav>
                )}
            </ThemeContext.Consumer>
        );
        */
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    <nav className={`nav-container ${theme.name}`} >
                    <div className={`nav-display-container ${theme.name}`} ></div>

                        <ul>
                            <li className='nav-item'>
                                <a className='nav-link-container' id='home-link' href='#home' onClick={this.props.selection}>
                                    <span className={`icon-text ${theme.name}`}>Home</span>
                                    <img className={`nav-icon ${theme.name}`} src='./images/home-icon.svg' alt='failed to load home icon D:' />
                                </a>
                            </li>

                            <li className='nav-item'>
                                <a className='nav-link-container' id='experience-link' href='#experience' onClick={this.props.selection}>
                                    <span className={`icon-text ${theme.name}`}>Experience</span>
                                    <img className={`nav-icon ${theme.name}`} src='./images/build-icon.svg' alt='failed to load build icon D:' />
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link-container' id='projects-link' href='#projects' onClick={this.props.selection}>
                                    <span className={`icon-text ${theme.name}`}>Projects</span>
                                    <img className={`nav-icon ${theme.name}`} src='./images/code-icon.svg' alt='failed to load code icon D:' />
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link-container' id='contact-link' href='#contact' onClick={this.props.selection}>
                                    <span className={`icon-text ${theme.name}`}>Contact</span>
                                    <img className={`nav-icon ${theme.name}`} src='./images/chat-icon.svg' alt='failed to load chat icon D:' />
                                </a>
                            </li>
                           
                        </ul>
                    </nav>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Nav;