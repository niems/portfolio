import React, {Component} from 'react';
import './style/nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav id='gooey-menu-container' ref={this.props.setRef}>
                <input type='checkbox' href='#' className='menu-open' />
    
                <div className='menu-open-button'>
                    <span className='hamburger' id='hamburger1'></span>
                    <span className='hamburger' id='hamburger2'></span>
                    <span className='hamburger' id='hamburger3'></span>
    
                    <span className='menu-item' id='menu-item1'>
                        <img className='menu-item-icon' src='./images/home-icon.svg' alt='home icon link' />
                        <span className='menu-item-description'>Home</span>
                    </span>
                    <span className='menu-item' id='menu-item2'>
                        <img className='menu-item-icon' src='./images/code-icon.svg' alt='portfolio icon link' />
                        <span className='menu-item-description'>Portfolio</span>
                    </span>
                    <span className='menu-item' id='menu-item3'>
                        <img className='menu-item-icon' src='./images/flask.svg' alt='experiments icon link' />
                        <span className='menu-item-description'>Experiments</span>
                    </span>
                    <span className='menu-item' id='menu-item4'>
                        <img className='menu-item-icon' src='./images/user.svg' alt='about me icon link' />
                        <span className='menu-item-description'>About</span>
                    </span>
                    <span className='menu-item' id='menu-item5'>
                        <img className='menu-item-icon' src='./images/chat-icon.svg' alt='contact icon link' />
                        <span className='menu-item-description'>Contact</span>
                    </span>
                </div>
            </nav>
        );
    }
}

export default Nav;