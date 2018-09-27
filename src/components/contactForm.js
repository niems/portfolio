import React, {Component} from 'react';
import './style/contactForm.css';

function postData(url = '', data = {}) {
    const encoded = Object.keys(data).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');

    return fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrer:'no-referrer',
        body: encoded,
    })
    .then(response => console.log(`Success: ${JSON.stringify(response)}`))
    .catch(error => console.error(`Error: ${error}`));
}

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        const id = e.target.id;

        if ( id === 'contact-name' ) {
            this.setState({ name: e.target.value });
        }

        else if ( id === 'contact-email' ) {
            this.setState({ email: e.target.value });
        }

        else if ( id === 'contact-subject' ) {
            this.setState({ subject: e.target.value });
        }

        else if ( id === 'contact-message' ) {
            this.setState({ message: e.target.value });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        
        const script = 'https://script.google.com/macros/s/AKfycbwIrgvK1uwPmTyA54wEZh0AXtflXsNUbbj19tNArDAMzylxFkI/exec';
        postData(script, this.state);
        
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    render() {
        return (
            <form id='gform' className='form-container' method='post' onSubmit={this.onSubmit} action=''>
                <fieldset>
                    <legend>Get in touch</legend>

                    <input value={this.state.name} className='contact-inputfield' id='contact-name' name='name' type='text'
                           autoComplete='false' autoFocus='true' required placeholder='Name' onChange={this.onChange} />

                    <input value={this.state.email} className='contact-inputfield' id='contact-email' name='email'
                           type='email' autoComplete='false' required placeholder='Email address' onChange={this.onChange} />

                    <input value={this.state.subject} className='contact-inputfield' id='contact-subject' name='subject'
                           type='text' autoComplete='false' required placeholder='Subject line' onChange={this.onChange} />

                    <textarea value={this.state.message} id='contact-message' name='message' spellCheck='false'
                              placeholder='Enter your message here' required onChange={this.onChange}></textarea>
                </fieldset>

                <button id='contact-submit' type='submit'>submit</button>
            </form>
        );
    }
}

export default ContactForm;