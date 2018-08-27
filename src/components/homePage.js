import React, {Component} from 'react';
import AutoText from './autoText';
import DistortText from './distortText';
import './style/homePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);

       this.autoTextSetup = {
            effect: 'spring',
            dynamicStrings: [
                "Ayyy, I'm Zach.",
            ],
        };

        this.distortTextSetup = {
            target: 'Full-stack developer.',
            delay: 1500,
            styleClass: 'homepage'
        };
    }

    render() {
        return (
            <div className={`page-container`}>
                <div id='home-container'>
                    <span className='home-info' id='name'>Zach Niemann</span>
                    <DistortText setup={this.distortTextSetup} />
                    <button type='button' id='about-me-btn'>About me</button>
                </div>
            </div>           
        );
        /*
        return (
            <div className={`page-container`}>
                <div id='home-container'>
                    <span className='home-info' id='name'>Zach Niemann</span>
                    <span className='home-info' id='dev-title'>Full-stack developer</span>
                    <button type='button' id='about-me-btn'>About me</button>
                </div>
            </div>           
        );
        */
        /*
        return (
            <div className={`page-container  ${this.props.direction}`}>
                <div id='home-container'>
                    <AutoText font='large' setup={this.autoTextSetup} />
                    <DistortText font='medium' setup={this.distortTextSetup} />
                </div>
            </div>           
        );
        */
    }
}

export default HomePage;