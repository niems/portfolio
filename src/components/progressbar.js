import React from 'react';
import './style/progressbar.css';

function ProgressBarIcons({ name, img, skillLevel, link }) {
    return (
        <a className='progress-bar-wrapper' href={link} target='_blank' alt={`Link to ${name} for more info`}>
            <div className='progress-text-bar-container'>
                <span className='progress-bar-img-container'>
                    <img className='progress-bar-img' src={img} alt={`${name} logo`} />
                </span>
                
                <div className='progress-bar-container'>
                    <span className='progress-bar' style={{width: skillLevel}}>
                        <span className='progress-bar-skill-level'>{skillLevel}</span>
                    </span>
                </div> 
            </div>

            <span className='progress-bar-text'>{name}</span>
        </a>
    );
}

export default function Progressbar(props) {
    const path = './images/icons/';

    const skillList = [
        {
            name: 'React',
            imgPath: `${path}react.svg`,
            skill: '80%', 
            link: 'https://reactjs.org/',
        },
        {
            name: 'JavaScript',
            imgPath: `${path}javascript.svg`,
            skill: '80%',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            name: 'Node.js',
            imgPath: `${path}nodejs.svg`,
            skill: '75%',
            link: 'https://nodejs.org/en/about/',
        },
        {
            name: 'Socket.IO',
            imgPath: `${path}socket.io.svg`,
            skill: '75%',
            link: 'https://socket.io/',
        },
        {
            name: 'WebRTC',
            imgPath: `${path}webrtc.svg`,
            skill: '70%',
            link: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API',
        },
        {
            name: 'Sass',
            imgPath: `${path}sass.svg`,
            skill: '85%',
            link: 'https://sass-lang.com/',
        },
        {
            name: 'Git',
            imgPath: `${path}git-icon.svg`,
            skill: '85%',
            link: 'https://git-scm.com/',
        },
        {
            name: 'HTML5',
            imgPath: `${path}html-5.svg`,
            skill: '90%',
            link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
        },
    ];

    const displayedSkills = skillList.map(skill => (
        <ProgressBarIcons key={skill.name} name={skill.name} img={skill.imgPath} skillLevel={skill.skill} link={skill.link} />
    ));

    return (
        <div className='all-progress-bars-container'>
            {displayedSkills}
        </div>
    );
}

