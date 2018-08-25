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
            delay: 2500
        };
    }

    render() {
        return (
            <div className={`page-container  ${this.props.direction}`} id='home-container'>
                <AutoText font='large' setup={this.autoTextSetup} />
                <DistortText font='medium' setup={this.distortTextSetup} />
            </div>           
        );
    }
}

export default HomePage;