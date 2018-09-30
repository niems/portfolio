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

        this.svg = {
            fill: '#000000',
            stroke: '#000000',
            strokeWidth: 0.2,
            strokeOpacity: 0.5,

            lPath: {
                strokeOpacity: 0.45,
                strokeWidth: 0.3
            },

            sPath: {
                strokeOpacity: 0.6,
                strokeWidth: 0.15
            },

            node: {
                strokeWidth: 0.1
            }
        }
    }

    render() {
        return (
            <div id='homepage' ref={this.props.setRef}>
                <ParticleLayer />
                
                <div id='home-container'>
                    <span id='home-background-img' >
                        <svg xmlns="http://www.w3.org/2000/svg" height='100%' width='100%' viewBox="0 0 100 100"
                             style={{fill: this.svg.fill, stroke: this.svg.stroke, strokeWidth: this.svg.strokeWidth, strokeOpacity: this.svg.strokeOpacity}}>

                            <path id='top-main' className='grid-design'  d='M10 10 L90 10' style={{strokeOpacity: this.svg.lPath.strokeOpacity, strokeWidth: this.svg.lPath.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='8.5' cy='10' style={{strokeWidth: this.svg.node.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='91.5' cy='10' style={{strokeWidth: this.svg.node.strokeWidth}} />                 

                            <path id='top-secondary' className='grid-design'  d='M20 15 L70 15' style={{strokeOpacity: this.svg.sPath.strokeOpacity, strokeWidth: this.svg.sPath.strokeWidth}} />


                            <path id='mid-main' className='grid-design' d='M80 20 L60 40'  style={{strokeOpacity: this.svg.lPath.strokeOpacity, strokeWidth: this.svg.lPath.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='81.5' cy='18.5' style={{strokeWidth: this.svg.node.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='58.5' cy='41.5' style={{strokeWidth: this.svg.node.strokeWidth}} />

                            <path id='mid-main' className='grid-design' d='M50 50 L20 80' style={{strokeOpacity: this.svg.lPath.strokeOpacity, strokeWidth: this.svg.lPath.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='51.5' cy='48.5' style={{strokeWidth: this.svg.node.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='18.5' cy='81.5' style={{strokeWidth: this.svg.node.strokeWidth}} />

                            <path id='mid-secondary' className='grid-design' d='M80 30 L40 70' style={{strokeOpacity: this.svg.sPath.strokeOpacity, strokeWidth: this.svg.sPath.strokeWidth}} />



                            <path id='bottom-main' className='grid-design' d='M10 90 L90 90' style={{strokeOpacity: this.svg.lPath.strokeOpacity, strokeWidth: this.svg.lPath.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='8.5' cy='90' style={{strokeWidth: this.svg.node.strokeWidth}} />
                            <circle className='grid-node' r='0.8' cx='91.5' cy='90' style={{strokeWidth: this.svg.node.strokeWidth}} />

                            <path id='bottom-secondary' className='grid-design' d='M25 86 h15' style={{strokeOpacity: this.svg.sPath.strokeOpacity, strokeWidth: this.svg.sPath.strokeWidth}} />
                            <path id='bottom-secondary' className='grid-design' d='M52 86 L86 86' style={{strokeOpacity: this.svg.sPath.strokeOpacity, strokeWidth: this.svg.sPath.strokeWidth}} />
                        </svg>
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

/*
<button type='button' className='btn slide-in fall' id='about-me-btn' onClick={this.onClick}>About me</button>


<a download href='./resume - Zach Niemann.pdf'>
<button id='resume-link' className='btn slide-in mid-expand'>resume</button>
</a>
*/