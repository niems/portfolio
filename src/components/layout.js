import React, {Component} from 'react';
import Navbar from './navbar';
import LandingPage from './landingPage';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import './style/layout.css';

//returns the new scroll index: determines the current page to display.
function calcScrollIndex(delta, scrollIndex, display) {
    if ( delta === 0) { 
        console.log('onWheel() registered a deltaY value of zero...');
    }

   else if ( delta > 0 ) { //scroll down
        if ( (scrollIndex + 1) < display.length ) { //only updates if the page range still valid: ex. If at bottom of page and user scrolls down,
            scrollIndex++;                          //it will stay on that page instead of looping back to the homepage
        }
    } 

    else { //scroll up
        if ( (scrollIndex - 1) >= 0 ) { //only updates if the page range still valid: ex. If at top of page and user scrolls up,
            scrollIndex--;              //it will stay on that page instead of looping back to the last page
        } 
    }

    return scrollIndex;
}

class Layout extends Component {
    constructor(props) {
        super(props);
        
        this.homeRef = undefined;
        this.experienceRef = undefined;
        this.projectsRef = undefined;
        this.contactRef = undefined;
        
        this.navbarSelect = this.navbarSelect.bind(this); //selected a navbar section
        this.setRef = this.setRef.bind(this); 

        this.acceptScrollData = true; //if set to false: user has just scrolled; new scroll data not accepted for 500ms
        this.onWheel = this.onWheel.bind(this);
        this.scrollIntoView = this.scrollIntoView.bind(this);
        this.scrollOptions = {
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        };

        this.scrollIndex = 0; //index of the current page displayed
        this.display = [ //all pages to display
            'home',
            'experience',
            'projects',
            'contact'
        ];
        
    }

    onWheel(e) {
        e.preventDefault();  

        if ( this.acceptScrollData ) { //user hasn't scrolled in at least 500ms
            this.acceptScrollData = false; //doesn't accept user scrolling again for 500ms

            this.scrollIndex = calcScrollIndex( e.deltaY, this.scrollIndex, this.display ); //returns index of new page to scroll to
            this.scrollIntoView( this.scrollIndex ); 

            setTimeout(() => {
                this.acceptScrollData = true; //now accepting more scroll data from user
            }, 500);
        }
    }

    scrollIntoView(viewName) {
        switch(viewName) {
            case 0:
                this.homeRef.scrollIntoView( this.scrollOptions );
                break;
            
            case 1:
                this.experienceRef.scrollIntoView( this.scrollOptions );
                break;

            case 2:
                this.projectsRef.scrollIntoView( this.scrollOptions );
                break;
            
            case 3:
                this.contactRef.scrollIntoView( this.scrollOptions );
                break;
            
            default:
                console.log('scrollIntoView() case not defined');
                break;
        }
    }

    navbarSelect(e) {
        e.preventDefault();

        const id = e.currentTarget.id.replace('-link', ''); //removes -link from the navbar selection
        this.scrollIndex = this.display.indexOf(id); //scroll index for new page

        this.scrollIntoView( this.scrollIndex ); //scrolls to new page
    }

    setRef(type, element) {
        switch(type) {
            case 'home':
                this.homeRef = element;
                break;
            
            case 'experience':
                this.experienceRef = element;
                break;

            case 'projects':
                this.projectsRef = element;
                break;
            
            case 'contact':
                this.contactRef = element;
                break;
            
            default:
            console.log('scrollIntoView() case not defined');
            break;
        }
    }

    render() {
        return (
            <div id='layout-container' onWheel={this.onWheel}>
                <Navbar selection={this.navbarSelect} />

                <LandingPage setRef={this.setRef} />
                <Experience setRef={this.setRef} />
                <Projects setRef={this.setRef} />
                <Contact setRef={this.setRef} />
            </div>
        );
    }
}

export default Layout;

/*
<svg>
    <circle />
    Sorry, your browser does not support SVG.  
</svg> 
*/