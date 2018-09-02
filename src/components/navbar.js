import React, {Component} from 'react';
import {ThemeContext} from '../theme-context';
import './style/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.homeRef = null;
        this.experimentsRef = null;
        this.portfolioRef = null;
        this.contactRef = null;

        this.menuRef = null;

        this.state = {
            displayed: 'home'
        };

        this.updateSelection = this.updateSelection.bind(this);
        this.removeActiveStatus = this.removeActiveStatus.bind(this);
        this.addActiveStatus = this.addActiveStatus.bind(this);
    }

    updateSelection(e) {
        e.preventDefault();
        const id = e.currentTarget.id;

        if ( this.state.displayed !== id ) {
            this.removeActiveStatus();
            this.addActiveStatus(id);

            this.setState({
                displayed: id
            });

            this.props.selection(id);
        }

        else {
            console.log('updateSelection() already selected - no action taken');
        }
    }

    removeActiveStatus() {
        switch(this.state.displayed) {
            case 'home':
                this.homeRef.classList.remove('selected');
                break;
            
            case 'experiments':
                this.experimentsRef.classList.remove('selected');
                break;
            
            case 'portfolio':
                this.portfolioRef.classList.remove('selected');
                break;
            
            case 'contact':
                this.contactRef.classList.remove('selected');
                break;
            
            case 'menu':
                this.menuRef.classList.remove('selected');
                break;
        }
    }

    addActiveStatus(id) {
        switch(id) {
            case 'home':
                this.homeRef.classList.add('selected');
                break;
            
            case 'experiments':
                this.experimentsRef.classList.add('selected');
                break;
            
            case 'portfolio':
                this.portfolioRef.classList.add('selected');
                break;
            
            case 'contact':
                this.contactRef.classList.add('selected');
                break;

            case 'menu':
                this.menuRef.classList.add('selected');
                break;
        }
    }

    render() {
        /*
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <nav className={`navbar-container ${theme.name}`} >
                        <ul>
                            <li className='logo'>
                                <img className={`navbar-icon ${theme.name}`} src='./images/logo/z-logo.svg' alt='failed to load logo D:' />
                            </li>

                            <li className='navbar-item desktop-only selected' id='home' onClick={this.updateSelection} ref={element => {this.homeRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/home-icon.svg' alt='failed to load home icon D:' />
                                <span className={`icon-text ${theme.name}`}>Home</span>
                            </li>

                            <li className='navbar-item desktop-only' id='portfolio' onClick={this.updateSelection} ref={element => {this.portfolioRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/code-icon.svg' alt='failed to load code icon D:' />
                                <span className={`icon-text ${theme.name}`}>Portfolio</span>
                            </li>

                            <li className='navbar-item desktop-only' id='experiments' onClick={this.updateSelection} ref={element => {this.experimentsRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/flask.svg' alt='failed to load build icon D:' />
                                <span className={`icon-text ${theme.name}`}>Experiments</span>
                            </li>

                            <li className='navbar-item desktop-only' id='contact' onClick={this.updateSelection} ref={element => {this.contactRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/chat-icon.svg' alt='failed to load chat icon D:' />
                                <span className={`icon-text ${theme.name}`}>Contact</span>
                            </li>


                            <li className='navbar-item mobile-only' id='menu' onClick={this.props.onMenu} ref={element => {this.menuRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/menu-black.svg' alt='failed to load menu icon D:' />
                                <span className={`icon-text ${theme.name}`}>Menu</span>
                            </li>
                        </ul>
                    </nav>
                )}
            </ThemeContext.Consumer>
        );
        */
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <nav className={`navbar-container ${theme.name}`} >
                        <div className='logo-container'>
                            <img className={`navbar-logo ${theme.name}`} src='./images/logo/z-logo.svg' alt='failed to load logo D:' />
                        </div>

                        <div className='icon-text desktop-only selected' id='home' onClick={this.updateSelection} ref={element => {this.homeRef = element;} }>Home</div>
                        <div className='icon-text desktop-only' id='portfolio' onClick={this.updateSelection} ref={element => {this.portfolioRef = element;} }>Portfolio</div>
                        <div className='icon-text desktop-only' id='experiments' onClick={this.updateSelection} ref={element => {this.experimentsRef = element;} }>Experiments</div>
                        <div className='icon-text desktop-only' id='contact' onClick={this.updateSelection} ref={element => {this.contactRef = element;} }>Contact</div>                        
                        
                        <div className='icon-text mobile-only' id='menu' onClick={this.props.onMenu} ref={element => {this.menuRef = element;} }>
                            <img className={`navbar-icon ${theme.name}`} id='menu-img' src='./images/menu.svg' alt='failed to load menu icon D:' />
                        </div>
                    </nav>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;