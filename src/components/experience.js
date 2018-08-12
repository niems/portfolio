import React, {Component} from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.setRef = element => {
            this.props.setRef('experience', element);
        }
    }

    render() {
        return (
            <section className='section-container' id='experience' ref={this.setRef}>
                experience
            </section>
        );
    }
}

export default Experience;