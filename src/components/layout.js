import React, {Component} from 'react';
import Navbar from './navbar';
import LandingPage from './landingPage';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import './style/layout.css';

function scrollIntoView(delta, scrollIndex, display) {
    if ( delta === 0) { 
        console.log('onWheel() registered a deltaY value of zero...');
        return undefined; 
    }

    else if ( delta > 0 ) { //scroll down
        scrollIndex++; //scrolls to the next page

        if ( scrollIndex > (display.length  - 1) ) {
            scrollIndex = 0; //reset values - starts at home page
        }
        
    }   
    
    else { //scroll up
        scrollIndex--; //scrolls to the previous page
        
        if ( scrollIndex < 0 ) {
            scrollIndex = display.length - 1;
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

        this.onWheel = this.onWheel.bind(this);
        this.scrollIntoView = this.scrollIntoView.bind(this);
        this.scrollOptions = {
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        };

        this.scrollIndex = 0; //index of the current page displayed
        this.display = [
            'home',
            'experience',
            'projects',
            'contact'
        ];
    }

    onWheel(e) {
        console.log('onWheel():');
        console.log(`\t delta mode: ${e.deltaMode}`);
        console.log(`\t delta x: ${e.deltaX}`);
        console.log(`\t delta y: ${e.deltaY}`);        
        console.log(`\t delta z: ${e.deltaZ}`);

        //console.log( `page index: ${this.display[this.currentPage.name]['index']}` );
        this.scrollIndex = scrollIntoView( e.deltaY, this.scrollIndex, this.display ); //returns index of new page to scroll to

        this.scrollIntoView( this.display[this.scrollIndex] ); 
    }

    scrollIntoView(viewName) {
        console.log(`scrollIntoView(): ${viewName}`);

        switch(viewName) {
            case 'navbar-home-section':
            case 'home':
                this.homeRef.scrollIntoView( this.scrollOptions );
                break;
            
            case 'navbar-experience-section':
            case 'experience':
                this.experienceRef.scrollIntoView( this.scrollOptions );
                break;

            case 'navbar-projects-section':
            case 'projects':
                this.projectsRef.scrollIntoView( this.scrollOptions );
                break;
            
            case 'navbar-contact-section':
            case 'contact':
                this.contactRef.scrollIntoView( this.scrollOptions );
                break;
            
            default:
                console.log('scrollIntoView() case not defined');
                break;
        }
    }

    navbarSelect(e) {
        e.preventDefault();

       this.scrollIntoView( e.currentTarget.id ); 
    }

    setRef(type, element) {
        switch(type) {
            case 'landing-page':
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
            <div id='layout-container' onScroll={this.onScroll} onWheel={this.onWheel}>
                <Navbar selection={this.navbarSelect} />
                <svg>
                    <circle />
                    Sorry, your browser does not support SVG.  
                </svg> 

                <LandingPage setRef={this.setRef} />
                <Experience setRef={this.setRef} />
                <Projects setRef={this.setRef} />
                <Contact setRef={this.setRef} />
            </div>
        );
    }
}

export default Layout;