import React, {Component} from 'react';
import AutoText from './autoText';
import DistortText from './distortText';

class HomePage extends Component {
    constructor(props) {
        super(props);

       this.autoTextSetup = {
            effect: 'spring',
            dynamicStrings: [
                'Hello.',
                'I pressed keys on my keyboard to create this :o'
            ],
        };

        this.noEffect = {
            target: 'distorted text no-effect'
        };

        this.distortTextSetup = {
            target: 'spaced-out effect',
            effect: 'spaced-out',
            delay: 3000
        };

        this.moreDistortedTextSetup = {
            target: 'single-output effect',
            effect: 'single-output',
            pauseBetweenDistortion: 40,
            delay: 6000
        };

    }

    render() {
        return (
                <div className={`page-container  ${this.props.direction}`} id='home-container'>
                    <DistortText setup={this.noEffect} />
                    <DistortText setup={this.distortTextSetup} />
                    <DistortText setup={this.moreDistortedTextSetup} />
                </div>                
        );
    }
}

export default HomePage;