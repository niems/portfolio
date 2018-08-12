import React, {Component} from 'react';

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.setRef = element => {
            this.props.setRef('landing-page', element);
        }
    }

    render() {
        return (
            <section className='section-container' id='landing-page' ref={this.setRef}>
                landing
            </section>
        );
    }
}

export default LandingPage;