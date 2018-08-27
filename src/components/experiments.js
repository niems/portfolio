import React, {Component} from 'react';
import AutoText from './autoText';
import './style/experiments.css';

class Experiments extends Component {
    constructor(props) {
        super(props);

        this.autoTextSetup = {
            loop: true,
            dynamicStrings: [
                'This is the blank experiments page D:',
                'This is not a test...',
                'This is all your fault.'
            ],
        };
    }

    render() {
        return (
            <div className={`page-container`} id='experiments-container' ref={this.props.setRef}>
                <AutoText font='medium' setup={this.autoTextSetup} />
            </div>
        );
    }
}

export default Experiments;