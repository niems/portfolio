import React, {Component} from 'react';
import AutoText from './autoText';
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
            <div className={`page-container`} id='homepage' ref={this.props.setRef}>
                <ParticleLayer />
                
                <div id='home-container'>
                    <div id='home-info-container'>
                        <span className='home-info' id='name'>Zach Niemann</span>
                        <div className='effect-container' id='homepage-effect'>
                            <DistortText setup={this.distortTextSetup} />
                        </div>
                    </div>
                    
                    <button type='button' className='btn' id='about-me-btn' onClick={this.onClick}>About me</button>
                </div>

                <div className='vertical-pointer-container'>
                    <span className='vertical-pointer'></span>
                </div>
            </div>           
        );
    }
}

export default HomePage;