import React, {Component} from 'react';
import './style/nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <nav id='gooey-menu-container'>
                <input type='checkbox' href='#' className='menu-open' />
    
                <div className='menu-open-button'>
                    <span className='hamburger' id='hamburger1'></span>
                    <span className='hamburger' id='hamburger2'></span>
                    <span className='hamburger' id='hamburger3'></span>
    
                    <span className='menu-item' id='menu-item1'>
                        <span className='menu-item-description'>Home</span>
                    </span>
                    <span className='menu-item' id='menu-item2'>
                        <span className='menu-item-description'>Portfolio</span>
                    </span>
                    <span className='menu-item' id='menu-item3'>
                        <span className='menu-item-description'>Experiments</span>
                    </span>
                    <span className='menu-item' id='menu-item4'>
                        <span className='menu-item-description'>About</span>
                    </span>
                    <span className='menu-item' id='menu-item5'>
                        <span className='menu-item-description'>Contact</span>
                    </span>
                </div>
            </nav>
        );
    }
}

export default Nav;