import React, {Component} from 'react';
import AutoText from './autoText';
import './style/contact.css';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.autoTextSetup = {
            staticText: '', 
            dynamicStrings: [
                'A contact page with no contact info...',
            ],
        };
    }

    render() {
        return (
            <div className={`page-container`} id='contact-container' ref={this.props.setRef}>
                <AutoText font='medium' setup={this.autoTextSetup} />
            </div>
        );
    }
}

export default Contact;