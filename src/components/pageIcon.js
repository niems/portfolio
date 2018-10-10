import React from 'react';
import './style/pageIcon.css';

const PageIcon = (props) => {
    return (
        <span className='page-icon-container'>
            <img className='page-icon-img' src='./images/page-icon-container.svg' alt='displays icon of the current page' />
        </span>
    );
};

export default PageIcon;
