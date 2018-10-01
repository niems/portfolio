import React from 'react';
import './style/progressbar.css';

function ProgressBarIcon({ name, img, link }) {
    return (
        <a className='progress-bar-wrapper' href={link} target='_blank' alt={`Link to ${name} for more info`}>
            <span className='progress-bar-img-container'>
                <img className='progress-bar-img' src={img} alt={`${name} logo`} />
            </span>

            <span className='progress-bar-text'>{name}</span>
        </a>
    );
}

function ProgressBarsSection({ title, skills }) {
    const displaySkills = skills.map(skill => (
        <ProgressBarIcon key={skill.name} name={skill.name} img={skill.imgPath} link={skill.link} />
    ));

    return (
        <div className='progressbar-section'>
            <div className='progressbar-section-description'>{title}</div>
            {displaySkills}
        </div>
    );
}

export default function Progressbar(props) {
    const path = './images/icons/';

    const dailySkills = [
        {
            name: 'React',
            imgPath: `${path}react.svg`,
            link: 'https://reactjs.org/',
        },
        {
            name: 'JavaScript',
            imgPath: `${path}javascript.svg`,
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            name: 'Sass',
            imgPath: `${path}sass.svg`,
            link: 'https://sass-lang.com/',
        },
        {
            name: 'Git',
            imgPath: `${path}git-icon.svg`,
            link: 'https://git-scm.com/',
        },
        {
            name: 'HTML5',
            imgPath: `${path}html-5.svg`,
            link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
        },
    ];

    const familiarSkills = [
        {
            name: 'Node.js',
            imgPath: `${path}nodejs.svg`,
            link: 'https://nodejs.org/en/about/',
        },
        {
            name: 'Socket.IO',
            imgPath: `${path}socket.io.svg`,
            link: 'https://socket.io/',
        },
        {
            name: 'WebRTC',
            imgPath: `${path}webrtc.svg`,
            link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API',
        },
    ];

    return (
        <div className='all-progress-bars-container'>
            <ProgressBarsSection title='Day-to-day:' skills={dailySkills} />
            <ProgressBarsSection title='Familiar with:' skills={familiarSkills} />
        </div>
    );
}

