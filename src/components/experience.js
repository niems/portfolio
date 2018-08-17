import React, {Component} from 'react';
import AutoText from './autoText';


class Experience extends Component {
    constructor(props) {
        super(props);

        this.autoTextSetup = {
            loop: true,
            duration: 100,
            staticText: 'This is ', 
            dynamicStrings: [
                'the blank experience page D:',
                'not a test...',
                'all your fault.'
            ],
        };
    }

    render() {
        return (
            <div className={`page-container ${this.props.direction}`} id='experience-container'>
                <AutoText setup={this.autoTextSetup} />
            </div>
        );
    }
}

export default Experience;