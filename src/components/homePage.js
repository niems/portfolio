import React, {Component} from 'react';
import AutoText from './autoText';

class HomePage extends Component {
    constructor(props) {
        super(props);

       this.autoTextSetup = {
            loop: true,
            duration: 100,
            staticText: '', 
            dynamicStrings: [
                'Hello.',
            ],
        };
    }

    render() {
        return (
                <div className={`page-container  ${this.props.direction}`} id='home-page-container'>
                    <AutoText setup={this.autoTextSetup} />
                </div>                
        );
    }
}

export default HomePage;