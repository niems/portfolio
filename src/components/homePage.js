import React, {Component} from 'react';
import AutoText from './autoText';
import DistortText from './distortText';
import './style/homePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.distortTextSetup = {
            target: 'Full-stack developer.',
            delay: 1500,
            styleClass: 'homepage'
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.selection('contact');
    }

    render() {
        return (
            <div className={`page-container`} id='home' ref={this.props.setRef}>
                <div id='home-container'>
                    <span className='home-info' id='name'>Zach Niemann</span>
                    <DistortText setup={this.distortTextSetup} />
                    <button type='button' id='about-me-btn' onClick={this.onClick}>About me</button>
                </div>
            </div>           
        );
    }
}

export default HomePage;