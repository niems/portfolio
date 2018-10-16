import React from 'react';
import './style/svgIcon.css';

function CodeIcon(props) {
    return (
        <React.Fragment>
            <path id='less-than' className='icons code-icon'      d='M0 50 l25 -25 l5 13 l-12 12 l12 12 l-5 13z' />
            <path id='greater-than' className='icons code-icon' d='M100 50 l-25 -25 l-5 13 l12 12 l-12 12 l5 13z' />
            <path id='forward-slash' className='icons code-icon' d='M61.5 12.5 l-35 70 l12 5 l35 -70z' />            
        </React.Fragment>
    );
}

function ChatIcon(props) {
    return (
        <React.Fragment>
            <path className='icons chat-icon' d='M20 10 L80 10 Q90 10, 90 20 L90 60 Q90 70, 80 70 L37 70 L15 90 L17 70 Q10 70, 10 60 L10 20 Q10 10, 20 10' />  
            <path className='icons chat-icon text' d='M25 33 H75' />  
            <path className='icons chat-icon text' d='M25 50 H60' />  
        </React.Fragment>
    );
}

function UserIcon(props) {
    return (
        <React.Fragment>
            <circle className='icons user-icon head' r='23' cx='50' cy='30' />
            <path className='icons user-icon body' d='M35 55 Q50 60, 65 55 Q85 58, 90 90 Q90 95, 82 95 L18 95 Q10 95, 10 90 Q15 58, 35 55' />
        </React.Fragment>
    );
}

function FlaskIcon(props) {
    return (
        <React.Fragment>
            <path className='icons flask-icon bottom' d='M60 45 Q92 85, 80 90 L20 90 Q8 85, 40 45 C45 40, 55 52, 60 45' />
            <path className='icons flask-icon solution-top' d='M40 45 C45 40, 55 52, 60 45' />
            <path className='icons flask-icon solution-top' d='M40 44.5 C45 40, 55 52, 60 44.5' />

            <circle className='icons flask-icon bubble' cx='48' cy='60' r='4.5' />
            <circle className='icons flask-icon bubble' cx='38' cy='75' r='3.5' />
            <circle className='icons flask-icon bubble' cx='60' cy='81' r='2.5' />
            
            <path className='icons flask-icon top' d='M35 10 Q30 15, 42.5 18 M40 18 L40 45' />
            <path className='icons flask-icon top' d='M35 10 L65 10 Q70 15, 58.5 18 M60 18 L60 45.6' />

            <path className='icons flask-icon measure' d='M60 25 h-11' />
            <path className='icons flask-icon measure' d='M60 30 h-11' />
            <path className='icons flask-icon measure' d='M60 35 h-11' />
        </React.Fragment>
    );
}

function HomeIcon(props) {
    return (
        <React.Fragment>
            <path className='icons home-icon roof' d='M13 50 L50 19 L87 50' />
            <path className='icons home-icon chimney' d='M65 30 v-10 h10 v18z' />
            <path className='icons home-icon main' d='M20 50 L50 25 L80 50 L80 85 L59 85 L59 60 L41 60 L41 85 L20 85z' />

        </React.Fragment>
    );
}

const iconRef = {
    'home': (<HomeIcon />),
    'portfolio': (<CodeIcon />),
    'experiments': (<FlaskIcon />),
    'about': (<UserIcon />),
    'contact': (<ChatIcon />)
};

//isPageIcon: determines if the svg is being used as a page icon - only the experiments page does this currently,
//all other pages use an image of the svg
const SvgIcon = ({ icon, isPageIcon }) => {
    const svgClass = isPageIcon ? 'svg-icon-container absolute-pos' : 'svg-icon-container';    

    return (
        <svg className={svgClass} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {iconRef[icon]}
        </svg>
    );
};

export default SvgIcon;