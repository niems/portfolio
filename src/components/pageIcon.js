import React from 'react';
import './style/pageIcon.css';

function PageBackground(props) {
    return (
        <svg className='page-bg-img' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L100 100 L200 0" />
        </svg>
    )
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

            <img className='page-icon-img' src={pageIcons[setup]} alt='displays icon of the current page'/>
        </span>
    );
};

export default PageIcon;
