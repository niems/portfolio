import React from 'react';
import SvgIcon from './svgIcon';
import './style/pageIcon.css';

function PageBackground(props) {
    return (
        <svg className='page-bg-img' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L100 100 L200 0" />
        </svg>
    );
}

const PageIcon = ({ setup }) => {
    
    const pageIcons = {
        'portfolio': './images/code-icon.svg',
        'experiments': './images/flask.svg',
        'about': './images/user.svg',
        'contact': './images/chat-icon.svg'
    };
    

    return (
        <span className={`page-icon-container ${setup}`}>
            <PageBackground />
            <img className='page-icon' src={pageIcons[setup]} alt={`${setup} icon image`} />
        </span>
    );
};

export default PageIcon;
