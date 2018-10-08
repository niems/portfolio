import React, {Component} from 'react';
import ProgressBar from './progressbar';
import './style/aboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <article id='about-me-section' ref={this.props.setRef}>

                <div className='about-me-container'>
                    <h1 id='about-me-header' className='section-header'>About me</h1>
                    <p className='section-description' id='about-init-description'>
                        Hi! I'm Zach, a versatile Web Developer with experience in both the front-end and back-end of the development process.
                    </p>

                    <p className='section-description'>
                        I'm always looking to grow my skill set, specializing in React and mobile-first responsive design.
                    </p>

                    <ProgressBar />

                    <a id='resume-link' href='./resume - Zach Niemann.pdf' download>
                        <button className='btn slide-in mid-expand'>resume</button>
                    </a>
                </div>
            </article>
        );
    }
}

export default AboutMe;