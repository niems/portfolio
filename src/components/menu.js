import React, {Component} from 'react';
import './style/menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(e) {
        e.preventDefault();
        const id = e.currentTarget.id.replace('-menu', '');

        this.props.onSelect(id);
    }

    render() {
        return (
            <div id='menu-container' className='fullscreen-container'>
                <div id='menu-header'>
                    <span id='navbar-close-container' onClick={this.props.onClose}>
                        <img id='navbar-close-img' className='navbar-icon' src='./images/close.svg' alt='failed to load close svg' />
                    </span>
                </div>

                <div id='page-list-container'>
                    <span className='page-item-container' id='home-menu' onClick={this.updateSelection}>Home</span>
                    <span className='page-item-container' id='portfolio-menu' onClick={this.updateSelection}>Portfolio</span>
                    <span className='page-item-container' id='experiments-menu' onClick={this.updateSelection}>Experiments</span>
                    <span className='page-item-container' id='contact-menu' onClick={this.updateSelection}>Contact</span>
                </div>

                <div id='nav-social-links'>
                    <a className='social-link-container' href='https://github.com/niems/' target='_blank'>
                        <img className='social-link-img' src='./images/social/github.svg' />
                    </a>

                    <a className='social-link-container' href='https://codepen.io/niems/' target='_blank'>
                        <img className='social-link-img' src='./images/social/codepen.svg' />
                    </a>
                </div>
            </div>
        );
    }
}

export default Menu;