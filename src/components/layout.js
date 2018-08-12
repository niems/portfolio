import React, {Component} from 'react';
import Navbar from './navbar';
import LandingPage from './landingPage';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import './style/layout.css';

//returns the new scroll index. If scroll index falls out of range (< 0 or > # of pages to display)
//it resets to the last page or first page, respectively
function calcScrollIndex(delta, scrollIndex, display) {
    if ( delta === 0) { 
        console.log('onWheel() registered a deltaY value of zero...');
        return scrollIndex; 
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
        this.display = [ //all pages to display
            'home',
            'experience',
            'projects',
            'contact'
        ];
        
    }

    onWheel(e) {
        e.preventDefault();  

        this.scrollIndex = calcScrollIndex( e.deltaY, this.scrollIndex, this.display ); //returns index of new page to scroll to
        this.scrollIntoView( this.scrollIndex ); 
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