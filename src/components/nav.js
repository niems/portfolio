import React, {Component} from 'react';
import './style/nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

        //this.inputRef = React.createRef();
        this.updateSelection = this.updateSelection.bind(this);
    }

    componentDidMount() {
        //this.inputRef.current.click();
    }

    updateSelection(e) {
        e.preventDefault();
        this.props.selection( e.currentTarget.parentNode.id.replace('-link', '') );
        //this.inputRef.current.click();
    }
    
    render() {
        return (
            <nav id='gooey-menu-container' ref={this.props.setRef}>
                <input type='checkbox' href='#' className='menu-open' ref={this.props.setToggleRef} checked/>
    
                <div className='menu-open-button'>
                    <span className='hamburger' id='hamburger1'></span>
                    <span className='hamburger' id='hamburger2'></span>
                    <span className='hamburger' id='hamburger3'></span>
                </div>
                
                <a className='menu-item' id='home-link'>
                    <span className='item-icon-container' onClick={this.updateSelection}>
                        <img className='menu-item-icon' src='./images/homeIcon.svg' alt='home icon link' />
                    </span>

                    <span className='menu-item-description'>Home</span>
                </a>
                <a className='menu-item' id='portfolio-link'>
                    <span className='item-icon-container' onClick={this.updateSelection}>
                        <img className='menu-item-icon' src='./images/codeIcon.svg' alt='portfolio icon link' />
                    </span>

                    <span className='menu-item-description'>Portfolio</span>
                </a>
                <a className='menu-item' id='experiments-link'>
                    <span className='item-icon-container' onClick={this.updateSelection}>                
                        <img className='menu-item-icon' src='./images/flaskIcon.svg' alt='experiments icon link' />
                    </span>

                    <span className='menu-item-description'>Experiments</span>
                </a>
                <a className='menu-item' id='about-me-link'>
                    <span className='item-icon-container' onClick={this.updateSelection}>                
                        <img className='menu-item-icon' src='./images/userIcon.svg' alt='about me icon link' />
                    </span>

                    <span className='menu-item-description'>About</span>
                </a>
                <a className='menu-item' id='contact-link'>
                    <span className='item-icon-container' onClick={this.updateSelection}>                
                        <img className='menu-item-icon' src='./images/chatIcon.svg' alt='contact icon link' />
                    </span>
                    
                    <span className='menu-item-description'>Contact</span>
                </a>
            </nav>
        );
    }
}

export default Nav;