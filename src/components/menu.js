import React, {Component} from 'react';
import './style/menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
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
                    <span className='page-item-container'>Home</span>
                    <span className='page-item-container'>Portfolio</span>
                    <span className='page-item-container'>Experiments</span>
                    <span className='page-item-container'>Contact</span>
                </div>

                <div id='nav-social-links'>
                    <span className='social-link-container'>Github</span>
                    <span className='social-link-container'>Codepen</span>
                </div>
            </div>
        );
    }
}

export default Menu;