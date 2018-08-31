import React, {Component} from 'react';
import AutoText from './autoText';
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
                <h2 id='experiments-header'>Experiments & Tinkering</h2>
                <div className='effect-container' id='experiments-autotext'>
                    <AutoText font='medium' setup={this.autoTextSetup} />
                </div>
            </div>
        );
    }
}

export default Experiments;