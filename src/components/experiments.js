import React, {Component} from 'react';
import AutoText from './autoText';
import DistortText from './distortText';
import './style/experiments.css';

function DisplayExperiment(props) {
    return (
        null
    );
}

class Experiments extends Component {
    constructor(props) {
        super(props);

        this.autoTextSetup = {
            loop: false,
            characterDuration: 80,
            dynamicStrings: [
                "Below are a few of the animations I've coded in CSS3 & SVG for fun :)"
            ],
        };

        this.distortTextSetup = {
            target: 'Experiments & Tinkering',
            delay: 1500,
        };
    }

    render() {
        return (
            <div className={`page-container`} id='experiments-container' ref={this.props.setRef}>
                <h2 id='experiments-header'>
                    <DistortText setup={this.distortTextSetup} />
                </h2>

                <p id='experiments-page-desc'>Below are a few animation I've coded for fun :D</p>

                <div id='all-experiments'>
                    <div className='single-experiment-container'>
                        <img className='experiment-img' src='./images/experiments/spinner pre-loader.gif' />
                        <p className='single-experiment-description'>CSS3 spinner preloader</p>
                    </div>

                    <div className='single-experiment-container'>
                        <img className='experiment-img' src='./images/experiments/inner-square.gif' />
                        <p className='single-experiment-description'>CSS3 "Squarcle"</p>
                    </div>

                    <div className='single-experiment-container'>
                        <img className='experiment-img' src='./images/experiments/spinner pre-loader.gif' />
                        <p className='single-experiment-description'>CSS3 spinner preloader</p>
                    </div>

                    <div className='single-experiment-container'>
                        <img className='experiment-img' src='./images/experiments/spinner pre-loader.gif' />
                        <p className='single-experiment-description'>CSS3 spinner preloader</p>
                    </div>

                    <div className='single-experiment-container'>
                        <img className='experiment-img' src='./images/experiments/inner-square.gif' />
                        <p className='single-experiment-description'>CSS3 "Squarcle"</p>
                    </div>

                    <div className='single-experiment-container'>
                        <img className='experiment-img' src='./images/experiments/spinner pre-loader.gif' />
                        <p className='single-experiment-description'>CSS3 spinner preloader</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experiments;