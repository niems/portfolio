import React, {Component} from 'react';
import './style/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav id='navbar-container'>
                <ul>
                    <li className='navbar-item'>
                        <a className='navbar-link-container' href='#landing-page'>
                            <img className='navbar-icon' src='./images/home-icon.svg' alt='failed to load home icon D:' />
                            <span>Home</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-link-container' href='#experience'>
                            <img className='navbar-icon' src='./images/build-icon.svg' alt='failed to load build icon D:' />
                            <span>Experience</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-link-container' href='#projects'>
                            <img className='navbar-icon' src='./images/code-icon.svg' alt='failed to load code icon D:' />
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className='navbar-item'>
                        <a className='navbar-link-container' href='#contact'>
                            <img className='navbar-icon' src='./images/chat-icon.svg' alt='failed to load chat icon D:' />
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;