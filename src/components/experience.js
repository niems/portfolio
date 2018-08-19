import React, {Component} from 'react';
import AutoText from './autoText';


class Experience extends Component {
    constructor(props) {
        super(props);

        this.autoTextSetup = {
            loop: true,
            dynamicStrings: [
                'This is the blank experience page D:',
                'This is not a test...',
                'This is all your fault.'
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