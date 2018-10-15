import React, {Component} from 'react';
import './style/nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.updateSelection = this.updateSelection.bind(this);
    }

    componentDidMount() {
        this.inputRef.current.click();
    }

    updateSelection(e) {
        e.preventDefault();
        this.props.selection( e.currentTarget.id.replace('-link', '') );
        this.inputRef.current.click();
    }
    
    render() {
        return (
            <nav id='gooey-menu-container' ref={this.props.setRef}>
                <input type='checkbox' href='#' className='menu-open' ref={this.inputRef} />
    
                <div className='menu-open-button'>
                    <span className='hamburger' id='hamburger1'></span>
                    <span className='hamburger' id='hamburger2'></span>
                    <span className='hamburger' id='hamburger3'></span>
                </div>
                
                <a className='menu-item' id='home-link' onClick={this.updateSelection}>
                    <img className='menu-item-icon' src='./images/homeIcon.svg' alt='home icon link' />
                    <span className='menu-item-description'>Home</span>
                </a>
                <a className='menu-item' id='portfolio-link' onClick={this.updateSelection}>
                    <img className='menu-item-icon' src='./images/codeIcon.svg' alt='portfolio icon link' />
                    <span className='menu-item-description'>Portfolio</span>
                </a>
                <a className='menu-item' id='experiments-link' onClick={this.updateSelection}>
                    <img className='menu-item-icon' src='./images/flaskIcon.svg' alt='experiments icon link' />
                    <span className='menu-item-description'>Experiments</span>
                </a>
                <a className='menu-item' id='about-me-link' onClick={this.updateSelection}>
                    <img className='menu-item-icon' src='./images/userIcon.svg' alt='about me icon link' />
                    <span className='menu-item-description'>About</span>
                </a>
                <a className='menu-item' id='contact-link' onClick={this.updateSelection}>
                    <img className='menu-item-icon' src='./images/chatIcon.svg' alt='contact icon link' />
                    <span className='menu-item-description'>Contact</span>
                </a>
            </nav>
        );
    }
}

export default Nav;