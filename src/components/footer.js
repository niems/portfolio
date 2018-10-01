import React from 'react';
import './contactForm';
import './style/footer.css';
import ContactForm from './contactForm';

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

const Footer = (props) => {
    return (
        <footer id='footer-container'>
            <ContactForm />
            <DisplaySocialLinks />
            <div id='footer-description'>Designed / Coded using React & Sass by Zach Niemann</div>
        </footer>
    );
};

export default Footer;