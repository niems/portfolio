import React, {Component} from 'react';
import AutoText from './autoText';


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
            <div className={`page-container ${this.props.direction}`} id='contact-container'>
                <AutoText font='medium' setup={this.autoTextSetup} />
            </div>
        );
    }
}

export default Contact;