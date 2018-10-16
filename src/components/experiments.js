import React, {Component} from 'react';
import DistortText from './distortText';
import PageIcon from './pageIcon';
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

        this.preloaderExperimentRef = null;
        this.menuExperimentRef = null;
        this.spinnerExperimentRef = null;


        this.onHoverEnter = this.onHoverEnter.bind(this);
        this.onHoverLeave = this.onHoverLeave.bind(this);
    }

    componentDidMount() {
        //pauses all videos until user hovers
        this.preloaderExperimentRef.pause();
        this.menuExperimentRef.pause();
        this.spinnerExperimentRef.pause();
    }

    onHoverEnter(e) {
        e.preventDefault();
        const id = e.target.id;
        
        switch(id) {
            case 'preloader-experiment':
                this.preloaderExperimentRef.play();
                break;

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

        switch(id) {
            case 'preloader-experiment':
                this.preloaderExperimentRef.pause();
                break;

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
            <div id='experiments-container' ref={this.props.setRef}>
                <PageIcon setup='experiments' />
                
                <div id='experiments-header-container'>
                    <h2 className='effect-container section-header' id='experiments-header'>
                        <DistortText setup={this.distortTextSetup} />
                    </h2>

                    <p className='section-description' id='experiments-page-desc'>These are the results of late-night tinkering. Tap/hover over an experiment below to animate it!</p>    
                </div>

                <div id='all-experiments'>
                    <DisplayExperiment vidId='menu-experiment' videoPath={'https://media.giphy.com/media/9DawXEUzWLcN2qzyX2/giphy.mp4'} desc='Pure Sass menu'
                                       mouseEnter={this.onHoverEnter} mouseLeave={this.onHoverLeave} setRef={el => this.menuExperimentRef = el} />

                    <DisplayExperiment vidId='preloader-experiment' videoPath={'https://media.giphy.com/media/1ziiF5jQ5CaXnjipIf/giphy.mp4'} desc='Sass preloader'
                                       mouseEnter={this.onHoverEnter} mouseLeave={this.onHoverLeave} setRef={el => this.preloaderExperimentRef = el} />

                    <DisplayExperiment vidId='spinner-experiment' videoPath={'https://media.giphy.com/media/9AIA9Jz1zwJKHvaLeI/giphy.mp4'} desc='CSS3 Spinner Preloader'
                                       mouseEnter={this.onHoverEnter} mouseLeave={this.onHoverLeave} setRef={el => this.spinnerExperimentRef = el} />
                </div>
            </div>
        );
    }
}

export default Experiments;