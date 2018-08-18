import React, {Component} from 'react';
import AutoText from './autoText';

class LandingPage extends Component {
    constructor(props) {
        super(props);

       this.autoTextSetup = {
            loop: true,
            duration: 100,
            staticText: 'This is ', 
            dynamicStrings: [
                'the landing page of success :P',
                'more testing...',
                'the last one :D'
            ],
        };
    }

    render() {
        return (
                <div className={`page-container ${this.props.direction}`} id='home-container'>
                    <AutoText setup={this.autoTextSetup} />
                </div>                
        );
    }
}

export default LandingPage;
/*<img src='./images/test-transparent.png' alt='no background img D:' />*/