import React, {Component} from 'react';
import Navbar from './navbar';
import LandingPage from './landingPage';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import './style/layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.scrollOptions = {
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth'
        };
        
        this.homeRef = undefined;
        this.experienceRef = undefined;
        this.projectsRef = undefined;
        this.contactRef = undefined;
        
        this.navbarSelect = this.navbarSelect.bind(this); //selected a navbar section
        this.setRef = this.setRef.bind(this); 
    }

    navbarSelect(e) {
        e.preventDefault();

        switch(e.currentTarget.id) {
            case 'navbar-home-section':
                this.homeRef.scrollIntoView( this.scrollOptions );
                break;

            case 'navbar-experience-section':
                this.experienceRef.scrollIntoView( this.scrollOptions );
                break;

            case 'navbar-projects-section':
                this.projectsRef.scrollIntoView( this.scrollOptions );
                break;
            
            case 'navbar-contact-section':
                this.contactRef.scrollIntoView( this.scrollOptions );
                break;
        }
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
        }
    }

    render() {
        return (
            <div id='layout-container'>
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