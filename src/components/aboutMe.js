import React, {Component} from 'react';
import ProgressBar from './progressbar';
import PageIcon from './pageIcon';
import './style/aboutMe.css';

function Highlighted({ text }) {
    
    const highlighted = text.split(' ').map((word, index) => (
        <span key={index} className='highlight-wrap'>
            <span className='highlight'>{word}</span>
        </span>
    ));

    return highlighted;
}

class AboutMe extends Component {
    render() {
        return (
            <article id='about-me-section' ref={this.props.setRef}>
                <PageIcon setup='about' />
                
                <div className='about-me-container'>
                    <h1 id='about-me-header' className='section-header'>About me</h1>
                    <p className='section-description' id='about-init-description'>
                        <span className='standout'>Hi!</span> I'm Zach, a versatile Web Developer with <Highlighted text='experience in both the front-end and back-end' /> of the development process.
                    </p>

                    <p className='section-description'>
                        I'm always looking to grow my skill set, <Highlighted text='specializing in React and mobile-first responsive design.' />
                    </p>

                    <ProgressBar />

                    <a id='resume-link' href='./resume - Zach Niemann.pdf' download>
                        <button className='btn slide-in ltr'>resume</button>
                    </a>
                </div>
            </article>
        );
    }
}

export default AboutMe;