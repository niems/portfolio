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

        //remove these
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
        /*
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
        */
    }

    addActiveStatus(id) {
        /*
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
       */
    }

    render() {
        const homeClasses = this.props.section === 'home' ? 'icon-text desktop-only selected' : 'icon-text desktop-only';
        const portfolioClasses = this.props.section === 'portfolio' ? 'icon-text desktop-only selected' : 'icon-text desktop-only';
        const experimentsClasses = this.props.section === 'experiments' ? 'icon-text desktop-only selected' : 'icon-text desktop-only';
        const contactClasses = this.props.section === 'contact' ? 'icon-text desktop-only selected' : 'icon-text desktop-only';

        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <nav className={`navbar-container ${theme.name}`} >
                        <div className={homeClasses} id='home' onClick={this.updateSelection} ref={element => {this.homeRef = element;} }>Home</div>
                        <div className={portfolioClasses} id='portfolio' onClick={this.updateSelection} ref={element => {this.portfolioRef = element;} }>Portfolio</div>
                        <div className={experimentsClasses} id='experiments' onClick={this.updateSelection} ref={element => {this.experimentsRef = element;} }>Experiments</div>
                        <div className={contactClasses} id='contact' onClick={this.updateSelection} ref={element => {this.contactRef = element;} }>Contact</div>                        
                        
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