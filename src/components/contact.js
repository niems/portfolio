import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.setRef = element => {
            this.props.setRef('contact', element);
        }
    }

    render() {
        return (
            <section className='section-container' id='contact' ref={this.setRef}>
                contact me
            </section>
        );
    }
}

export default Contact;