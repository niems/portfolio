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
                <div className='about-me-section'>
                    <span className='contact-background-layer'>About</span>
                    about me
                </div>

                <div className='contact-section'>
                    <span className='contact-background-layer'>Contact</span>
                    contact section
                </div>
            </div>
        );
    }
}

export default Contact;