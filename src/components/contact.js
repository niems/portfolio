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
                <div className='effect-container' id='contact-effect'>
                    <AutoText font='medium' setup={this.autoTextSetup} />
                </div>
            </div>
        );
    }
}

export default Contact;