import React, {Component} from 'react';
import AutoText from './autoText';
import './style/portfolio.css';

/*
<img className='portfolio-project-img' src='./images/projects/placeholder-project.png' alt='' />

*/
function DisplayProject({ name, frameworks }) {
    return (
        <div className='portfolio-project-container'>

            <div className='portfolio-project-hover-info'>
                <span className='portfolio-project-header'>
                    <h3 className='portfolio-project-name'>{name}</h3>
                    <h4 className='portfolio-project-frameworks'>{frameworks}</h4>
                </span>

                <button className='portfolio-project-btn'>learn more</button>
            </div>

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
                    <DisplayProject name='Project name 1' frameworks='Node + React' />
                    <DisplayProject name='Project name 1' frameworks='Node + React' />
                    <DisplayProject name='Project name 1' frameworks='Node + React' />

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