import React, {Component} from 'react';
import DistortText from './distortText';
import './style/experiments.css';

function DisplayExperiment({ imgPath, desc }) {
    return (
        <div className='single-experiment-container'>
            <img className='experiment-img' src={imgPath} />
            <p className='experiment-description'>{desc}</p>
        </div>
    );
}

class Experiments extends Component {
    constructor(props) {
        super(props);

        this.distortTextSetup = {
            target: 'Experiments',
            delay: 1500,
        };
    }

    render() {
        return (
            <div className={`page-container`} id='experiments-container' ref={this.props.setRef}>
                <h2 className='section-header' id='experiments-header'>
                    <DistortText setup={this.distortTextSetup} />
                </h2>

                <p id='experiments-page-desc'>Below are the results of late-night fiddling :D</p>

                <div id='all-experiments'>
                    <DisplayExperiment imgPath='./images/experiments/spinner pre-loader.gif'
                                       desc='CSS3 spinner preloader' />

                    <DisplayExperiment imgPath='./images/experiments/inner-square.gif'
                                       desc='CSS3 "Squarcle"' />                              
                </div>
            </div>
        );
    }
}

export default Experiments;