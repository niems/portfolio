import React, {Component} from 'react';
import AutoText from './autoText';

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
    }

    render() {
        return (
                <div className={`page-container  ${this.props.direction}`} id='home-container'>
                    <AutoText setup={this.autoTextSetup} />
                </div>                
        );
    }
}

export default HomePage;