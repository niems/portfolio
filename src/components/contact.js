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
                    <h2 className='contact-header'>About me.</h2>
                    <h3 className='contact-subheader'>Full-stack developer.</h3>
                    <p className='contact-desc'>
                        I'm Zach Niemann, a Freelance Full-stack developer. I first became passionate about coding in 
                        high school when I created my first game - a 2D platformer in C++ & SFML.
                    </p>
                    <p className='contact-desc'>
                        Since then I've...more rambling about self here...
                    </p>
                </div>

                <div className='contact-section'>
                    <span className='contact-background-layer'>Contact</span>
                    <h2 className='contact-header'>Get in touch.</h2>
                    <h3 className='contact-subheader'>Full-time position, freelance project, or even a coffee.</h3>
                    
                    <p className='contact-desc'>
                    Lorem ipsum dolor sit amet, at animal deterruisset qui, aeque graecis eu quo. Vis possit volutpat splendide ne, qualisque iudicabit democritum ut mea. An pri graece alterum labores.
                    </p>

                    <p className='contact-desc'>
                    Lorem ipsum dolor sit amet, at animal deterruisset qui, aeque graecis eu quo. Vis possit volutpat splendide ne, qualisque iudicabit democritum ut mea. An pri graece alterum labores.
                    </p>
                </div>
            </div>
        );
    }
}

export default Contact;