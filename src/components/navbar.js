import React, {Component} from 'react';
import {ThemeContext} from '../theme-context';
import './style/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.homeRef = null;
        this.experienceRef = null;
        this.projectsRef = null;
        this.contactRef = null;

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
            
            case 'experience':
                this.experienceRef.classList.remove('selected');
                break;
            
            case 'projects':
                this.projectsRef.classList.remove('selected');
                break;
            
            case 'contact':
                this.contactRef.classList.remove('selected');
                break;
        }
    }

    addActiveStatus(id) {
        switch(id) {
            case 'home':
                this.homeRef.classList.add('selected');
                break;
            
            case 'experience':
                this.experienceRef.classList.add('selected');
                break;
            
            case 'projects':
                this.projectsRef.classList.add('selected');
                break;
            
            case 'contact':
                this.contactRef.classList.add('selected');
                break;
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <nav className={`navbar-container ${theme.name}`} >
                        <ul>
                            <li className='navbar-item selected' id='home' onClick={this.updateSelection} ref={element => {this.homeRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/home-icon.svg' alt='failed to load home icon D:' />
                                <span className={`icon-text ${theme.name}`}>Home</span>
                            </li>

                            <li className='navbar-item' id='experience' onClick={this.updateSelection} ref={element => {this.experienceRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/build-icon.svg' alt='failed to load build icon D:' />
                                <span className={`icon-text ${theme.name}`}>Experience</span>
                            </li>

                            <li className='navbar-item' id='projects' onClick={this.updateSelection} ref={element => {this.projectsRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/code-icon.svg' alt='failed to load code icon D:' />
                                <span className={`icon-text ${theme.name}`}>Projects</span>
                            </li>

                            <li className='navbar-item' id='contact' onClick={this.updateSelection} ref={element => {this.contactRef = element;} }>
                                <img className={`navbar-icon ${theme.name}`} src='./images/chat-icon.svg' alt='failed to load chat icon D:' />
                                <span className={`icon-text ${theme.name}`}>Contact</span>
                            </li>
                        </ul>
                    </nav>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;