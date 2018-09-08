import React, {Component} from 'react';
import {ThemeContext} from '../theme-context';
import './style/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        
        this.classes = {
            home: 'icon-text desktop-only selected',
            portfolio: 'icon-text desktop-only',
            experiments: 'icon-text desktop-only',
            contact: 'icon-text desktop-only'
        };

        this.menuRef = null;
        this.updateSelection = this.updateSelection.bind(this);
        this.updateHighlight = this.updateHighlight.bind(this);
    }

    updateSelection(e) {
        e.preventDefault();
        this.props.selection( e.currentTarget.id.replace('-link', '') );
    }

    updateHighlight() {
        let classes = {
            home: 'icon-text desktop-only',
            portfolio: 'icon-text desktop-only',
            experiments: 'icon-text desktop-only',
            contact: 'icon-text desktop-only'
        };

        switch(this.props.section) {
            case 'home':
                classes.home += ' selected';
                break;
            case 'portfolio':
                classes.portfolio += ' selected';
                break;
            case 'experiments':
                classes.experiments += ' selected';
                break;
            case 'contact':
                classes.contact += ' selected';
                break;
        }

        this.classes = classes;
    }

    render() {
        this.updateHighlight();

        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <nav className={`navbar-container ${theme.name}`} ref={this.props.setRef} >
                        <div className={this.classes.home} id='home-link' onClick={this.updateSelection}>Home</div>
                        <div className={this.classes.portfolio} id='portfolio-link' onClick={this.updateSelection}>Portfolio</div>
                        <div className={this.classes.experiments} id='experiments-link' onClick={this.updateSelection}>Experiments</div>
                        <div className={this.classes.contact} id='contact-link' onClick={this.updateSelection}>Contact</div>                        
                        
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