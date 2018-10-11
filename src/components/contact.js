import React from 'react';
import PageIcon from './pageIcon';
import ContactForm from './contactForm';
import './style/contact.css';

function DisplaySocialLinks(props) {
    return (
        <div id='contact-social-links'>
            <a href='https://github.com/niems' id='github-link' className='btn slide-in smush-mid contact-link' target='_blank' rel='noopener noreferrer'>
                <img src='./images/social/github.svg' alt='Github profile' />
            </a>

            <a href='https://dribbble.com/ni3ms' id='dribbble-link' className='btn slide-in smush-mid contact-link' target='_blank' rel='noopener noreferrer'>
                <img src='./images/social/dribbble-icon.svg' alt='Dribbble profile' />
            </a>

            <a href='https://codepen.io/niems/full/MBBWoK/' id='codepen-link' className='btn slide-in smush-mid contact-link' target='_blank' rel='noopener noreferrer'>
                <img src='./images/social/codepen.svg' alt='Codepen profile' />
            </a>
        </div>
    );
}

const Contact = ({ setRef }) => {
    return (
        <article id='contact-container' ref={setRef}>
            <PageIcon setup='contact' />
            <ContactForm />
            
            <div id='contact-info'>
                <DisplaySocialLinks />
                <div id='contact-description'>
                    <span>Hand-crafted, artisan HTML, Sass, & React.</span>
                    <span>Free-range & GMO free.</span>
                    <span>Coded by Zach Niemann</span>
                </div>
            </div>

        </article>
    );
};

export default Contact;