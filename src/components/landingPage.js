import React, {Component} from 'react';
import AutoText from './autoText';

class LandingPage extends Component {
    constructor(props) {
        super(props);

       this.autoTextSetup = {
            loop: true,
            duration: 100,
            staticText: 'This is ', 
            dynamicStrings: [
                'the landing page of success :P',
                'more testing...',
                'the last one :D'
            ],
        };

        this.setRef = element => {
            this.props.setRef('home', element);
        }
    }

    render() {
        return (
            <section className='section-container' id='home' ref={this.setRef}>
                <AutoText setup={this.autoTextSetup} />
            </section>
        );
    }
}

export default LandingPage;