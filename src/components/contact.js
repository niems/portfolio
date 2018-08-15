import React, {Component} from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`page-container ${this.props.direction}`} id='contact-container'>
                contact me
            </div>
        );
    }
}

export default Contact;