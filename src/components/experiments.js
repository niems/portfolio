import React, {Component} from 'react';
import DistortText from './distortText';
import './style/experiments.css';

class DisplayExperiment extends Component {
    render() {
        return (
            <div className='single-experiment-container'>
                <video id={this.props.vidId} className='experiment-video' onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave} src={this.props.videoPath}
                       loop='true' playsInline='true' ref={this.props.setRef} autoPlay='false'></video>
                <p className='experiment-description'>{this.props.desc}</p>
            </div>
        );
    }
}

class Experiments extends Component {
    constructor(props) {
        super(props);

        this.distortTextSetup = {
            target: 'Experiments',
            delay: 1500,
        };

        this.menuExperimentRef = null;
        this.spinnerExperimentRef = null;


        this.onHoverEnter = this.onHoverEnter.bind(this);
        this.onHoverLeave = this.onHoverLeave.bind(this);
    }

    componentDidMount() {
        //pauses all videos until user hovers
        this.menuExperimentRef.pause();
        this.spinnerExperimentRef.pause();
    }

    onHoverEnter(e) {
        e.preventDefault();
        const id = e.target.id;
        console.log(`onHover() enter: ${id}`);
        
        switch(id) {
            case 'menu-experiment':
                this.menuExperimentRef.play();
                break;
            
            case 'spinner-experiment':
                this.spinnerExperimentRef.play();
                break;

            default:
                console.log('case not found');
                break;
        }
    }

    onHoverLeave(e) {
        e.preventDefault();
        const id = e.target.id;
        console.log(`onHover() leave: ${id}`);

        switch(id) {
            case 'menu-experiment':
                this.menuExperimentRef.pause();
                break;

            case 'spinner-experiment':
                this.spinnerExperimentRef.pause();
                break;

            default:
                console.log('case not found');
                break;
        }
    }

    render() {
        return (
            <div className={`page-container`} id='experiments-container' ref={this.props.setRef}>
                <h2 className='section-header' id='experiments-header'>
                    <DistortText setup={this.distortTextSetup} />
                </h2>

                <p id='experiments-page-desc'>Below are the results of late-night fiddling :D</p>

                <div id='all-experiments'>
                    <DisplayExperiment vidId='menu-experiment' videoPath={'https://media.giphy.com/media/enqNLaVPlp8fItGMSd/giphy.mp4'} desc='Pure Sass menu'
                                       mouseEnter={this.onHoverEnter} mouseLeave={this.onHoverLeave} setRef={el => this.menuExperimentRef = el} />

                    <DisplayExperiment vidId='spinner-experiment' videoPath={'https://media.giphy.com/media/9AIA9Jz1zwJKHvaLeI/giphy.mp4'} desc='CSS3 Spinner Preloader'
                                       mouseEnter={this.onHoverEnter} mouseLeave={this.onHoverLeave} setRef={el => this.spinnerExperimentRef = el} />
                </div>
            </div>
        );
    }
}

export default Experiments;