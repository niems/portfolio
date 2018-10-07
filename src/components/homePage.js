import React, {Component} from 'react';
import DistortText from './distortText';
import ParticleLayer from './particleLayer';
import './style/homepage.css';

function DisplayScrollDirection(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height='100%' width='100%' viewBox="0 0 100 100">
            <path id='scroll-path'  d='M40 0 V100 H60 V0 z' />
        </svg>
    );
}

function DisplayLogo(props) {    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height='100%' width='100%' viewBox="0 0 100 100">

            <path id='top-main' className='grid-main'  d='M10 10 L90 10' />
            <circle className='grid-node' r='0.8' cx='8.5' cy='10' />
            <circle className='grid-node' r='0.8' cx='91.5' cy='10' />                 

            <path id='top-secondary' className='grid-secondary'  d='M20 12 L70 12' />
            <circle className='grid-node-secondary' r='0.5' cx='18.8' cy='12' />
            <circle className='grid-node-secondary' r='0.5' cx='71.2' cy='12' />


            <path id='mid-main' className='grid-main' d='M86 15 l-27 26' />
            <circle className='grid-node' r='0.8' cx='87' cy='14' />
            <circle className='grid-node' r='0.8' cx='58' cy='42' />

            <path id='mid-main' className='grid-main' d='M14.8 83 l31 -30' />
            <circle className='grid-node' r='0.8' cx='46.6' cy='52.2' />
            <circle className='grid-node' r='0.8' cx='14' cy='84' />

            <path id='mid-secondary' className='grid-secondary' d='M74.4 29 L23 78' />
            <circle className='grid-node-secondary' r='0.5' cx='75.2' cy='28' />
            <circle className='grid-node-secondary' r='0.5' cx='22.2' cy='78.8' />


            <path id='bottom-main' className='grid-main' d='M10 90 L90 90' />
            <circle className='grid-node' r='0.8' cx='8.5' cy='90' />
            <circle className='grid-node' r='0.8' cx='91.5' cy='90' />

            <path id='bottom-secondary' className='grid-secondary' d='M20 88 h15' />
            <circle className='grid-node-secondary' r='0.5' cx='18.8' cy='88' />
            <circle className='grid-node-secondary' r='0.5' cx='36.2' cy='88' />

            <path id='bottom-secondary' className='grid-secondary' d='M52 88 h32' />
            <circle className='grid-node-secondary' r='0.5' cx='50.8' cy='88' />
            <circle className='grid-node-secondary' r='0.5' cx='85.2' cy='88' />
        </svg>
    );
}

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.distortTextSetup = {
            target: 'Full-stack developer.',
            delay: 1500,
            styleClass: 'homepage'
        };
    }

    render() {
        return (
            <div id='homepage' ref={this.props.setRef}>
                <ParticleLayer />
                
                <div id='home-container'>
                    <span id='home-background-img' >
                        <DisplayLogo />
                    </span>
                
                    <div id='home-info-container'>
                        <span className='home-info' id='name'>Zach Niemann</span>
                        <div className='effect-container' id='homepage-effect'>
                            <DistortText setup={this.distortTextSetup} />
                        </div>
                    </div>
                </div>
                
                <div className='vertical-pointer-container'>
                    <span className='vertical-pointer'></span>
                </div>
            </div>           
        );
    }
}

export default HomePage;