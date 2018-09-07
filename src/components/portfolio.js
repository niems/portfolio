import React, {Component} from 'react';
import AutoText from './autoText';
import './style/portfolio.css';

function DisplayProject({ name, frameworks }) {
    return (
        <div className='portfolio-project-container'>

            <div className='portfolio-project-hover-info'>
                <span className='portfolio-project-header'>
                    <h3 className='portfolio-project-name'>{name}</h3>
                    <h4 className='portfolio-project-frameworks'>{frameworks}</h4>
                </span>

                <button className='btn learn-more'>learn more</button>
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
                <h2 className='portfolio-header section-header'>Projects</h2>
                
                <div id='portfolio-projects'>
                    <DisplayProject name='Roulette' frameworks='Node + React + Socket.IO + WebRTC' />
                    <DisplayProject name='placeholder project' frameworks='...' />
                    <DisplayProject name='placeholder project' frameworks='...' />

                </div>
            </div>
        );
    }
}

export default Portfolio;