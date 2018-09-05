import React, {Component} from 'react';
import AutoText from './autoText';
import './style/portfolio.css';

function DisplayProject(props) {
    return (
        <div className='portfolio-project-container'>

        </div>
    );
}


class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.autoTextSetup = {
            loop: true,
            dynamicStrings: [
                'An empty portfolio page D:',
                'What a surprise :o',
                'Maybe put projects here instead...'
            ],
        };
    }

    render() {
        return (
            <div className={`page-container`} id='portfolio-container' ref={this.props.setRef}>
                <h2 className='portfolio-header'>Projects</h2>
                
                <div id='portfolio-projects'>
                    <DisplayProject />
                    <DisplayProject />
                    <DisplayProject />

                </div>
            </div>
        );
    }
}

export default Portfolio;

/*
<div className='effect-container' id='portfolio-auto-effect'>
                    <AutoText setup={this.autoTextSetup} />
                </div>
*/