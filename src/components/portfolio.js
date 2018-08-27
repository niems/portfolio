import React, {Component} from 'react';
import AutoText from './autoText';
import './style/portfolio.css';


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
            <div className={`page-container`} id='portfolio-container'>
                <AutoText font='medium' setup={this.autoTextSetup} />
            </div>
        );
    }
}

export default Portfolio;