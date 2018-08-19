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

        this.distortTextSetup = {
            target: 'distorted text spaced out',
            effect: 'spaced-out'
        };

        this.moreDistortedTextSetup = {
            target: 'distorted text without spacing',
            delay: 3000
        };
    }

    render() {
        return (
                <div className={`page-container  ${this.props.direction}`} id='home-container'>
                    <DistortText setup={this.distortTextSetup} />
                    <DistortText setup={this.moreDistortedTextSetup} />
                </div>                
        );
    }
}

export default HomePage;