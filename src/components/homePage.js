import React, {Component} from 'react';
import DistortText from './distortText';
import ParticleLayer from './particleLayer';
import './style/homepage.css';

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
            <div id='homepage' ref={this.props.setRef}>
                <ParticleLayer />

                    <a href='./resume - Zach Niemann.pdf' download='./resume - Zach Niemann.pdf' className='' 
                       target='_blank' rel='noopener noreferrer'>
                            <button id='resume-link' className='btn slide-in mid-expand'>resume</button>
                    </a>
                
                <div id='home-container'>
                    <img id='home-background-img' src='./images/logo/z-logo-homepage.svg' alt='background logo' />

                    <div id='home-info-container'>
                        <span className='home-info' id='name'>Zach Niemann</span>
                        <div className='effect-container' id='homepage-effect'>
                            <DistortText setup={this.distortTextSetup} />
                        </div>
                    </div>
                    
                    <button type='button' className='btn slide-in fall' id='about-me-btn' onClick={this.onClick}>About me</button>
                </div>

                <div className='vertical-pointer-container'>
                    <span className='vertical-pointer'></span>
                </div>
            </div>           
        );
    }
}

export default HomePage;