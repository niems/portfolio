import React, {Component} from 'react';
import ProgressBar from './progressbar';
import ContactForm from './contactForm';
import './style/contactMe.css';

class ContactMe extends Component {
    render() {
        return (
            <article id='about-me-section' ref={this.props.setRef}>
                <h1 id='about-me-header' className='section-header'>About me</h1>

                <p className='section-description' id='about-init-description'>
                    Hi! I'm Zach, a versatile Web Developer with experience in both the front-end and back-end of the development process.
                </p>

                <p className='section-description'>
                    I'm always looking to grow my skill set, specializing in React and mobile-first responsive design.
                </p>

                <ProgressBar />
            </article>
        );
    }
}

export default ContactMe;

/*
<a href='./resume - Zach Niemann.pdf' download='./resume - Zach Niemann.pdf' className='btn slide-in smush-mid' id='resume-link' target='_blank' rel='noopener noreferrer'>
        resume
</a>
Hi! I'm Zach, a Web Developer with a passion for problem solving, insatiably curious, and a lover of code.
                        Experience with both the front-end and back-end sides of the development process.

    A Web Developer with a passion for problem solving, no stranger to sarcasm, and a fan of portals (WUBBA LUBBA DUB DUB!). Coding started as a
    hobby about 10 years ago, quickly turning from a hobby to THE hobby. 

    coding - hobby turned living...

    A Web Developer with a passion for problem solving, no stranger to sarcasm, and a fan of portals (WUBBA LUBBA DUB DUB!). I started coding
    about 10 years ago, ever since I started coding 2D platformer games in C++ and SFML I've been hooked - I was actually already hooked by that
    point, I just wanted to mention I've coded games in C++ and SFML :P
*/