import React from 'react';
import ProgressBar from './progressbar';
import ContactForm from './contactForm';
import './style/contact-me.css';

const ContactMe = (props) => {
    return (
        <div className='main-section-container scrollbar' id='contact-me-container'>
                    
            <article id='about-me-section'>
                <h1 id='about-me-header' className='section-header'>About me</h1>
                <p className='section-description'>
                    Hi! I'm Zach, a Web Developer with a passion for problem solving, insatiably curious, and a lover of sarcasm.
                    Experience with both the front-end and back-end sides of the development process, looking for my next opportunity.
                </p>

                <ProgressBar />
            </article>

            <article id='contact-me-section'>
                <ContactForm />

                <div id='contact-social-links'>
                    <a href='https://github.com/niems' className='contact-link' target='_blank' rel='noopener noreferrer'>
                        <img src='./images/social/github.svg' alt='Github profile' />
                    </a>

                    <a href='https://dribbble.com/ni3ms' className='contact-link' target='_blank' rel='noopener noreferrer'>
                        <img src='./images/social/dribbble-icon.svg' alt='Dribbble profile' />
                    </a>

                    <a href='https://codepen.io/niems/full/MBBWoK/' className='contact-link' target='_blank' rel='noopener noreferrer'>
                        <img src='./images/social/codepen.svg' alt='Codepen profile' />
                    </a>

                    <a href='./resume - Zach Niemann.pdf' download='./resume - Zach Niemann.pdf' className='contact-link' target='_blank' rel='noopener noreferrer'>
                        resume
                    </a>
                </div>

                <span id='footer-description'>Designed & Coded by Zach Niemann.</span>
            </article>
        </div>
    );
};

export default ContactMe;