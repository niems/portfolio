import React, {Component} from 'react';
import Nav from './nav';
import HomePage from './homePage';
import Experiments from './experiments';
import Portfolio from './portfolio';
import AboutMe from './aboutMe';
import Contact from './contact';

import './style/view.css';

//returns the current section the user is viewing
//this is based on the section currently in the center of the view
function updateViewSelection( scrollTop, data ) {
    const midpoint = scrollTop + data['view'];
    let section = ''; //section in the middle of the viewport - what will be selected in the navbar
    let topSection = 'home'; //section visible at the very top of the screen - used for lazy loading

    if (scrollTop > data['home']) {
        topSection = 'portfolio';
    }
    
    else if (scrollTop > data['portfolio']) {
        topSection = 'experiments';
    }

    else if (scrollTop > data['experiments']) {
        topSection = 'about';
    }

    else if (scrollTop > data['about']) {
        topSection = 'contact';
    }


    if ( midpoint <= data['home'] ) {
        section = 'home';
    }

    else if ( midpoint <= data['portfolio'] ) {
        section = 'portfolio';
    }

    else if ( midpoint <= data['experiments'] ) {
        section = 'experiments';
    }

    else if ( midpoint <= data['about'] ) {
        section = 'about';
    }

    else if ( midpoint <= data['contact'] ) {
        section = 'contact';
    }

    return {currentSection: section, topSection: topSection};
}

class View extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentSection: 'home', //section on the majority of the screen
            topSection: 'home', //section visible at the very top of the screen - used for lazy loading
        };

        this.pageHeight = {
            'view': -1,
            'home': -1,
            'portfolio': -1,
            'experiments': -1,
            'about': -1,
            'contact': -1
        };

        this.homeRef = null;
        this.portfolioRef = null;
        this.experimentsRef = null;
        this.aboutRef = null;
        this.contactRef = null;

        this.navbarRef = null;

        this.updateDisplayedPage = this.updateDisplayedPage.bind(this); 
        this.getSectionHeights = this.getSectionHeights.bind(this); //gets the start/end scroll height for each section

        this.viewRef = null;
        this.onScroll = this.onScroll.bind(this);
        this.onResize = this.onResize.bind(this); //gets the new section heights if the screen is resized
    }

    componentDidMount() {
        this.getSectionHeights();
        window.addEventListener('resize', this.onResize);
    }

    onResize() {
        this.getSectionHeights();
    }

    updateDisplayedPage(id) {
        const scrollOptions = {behavior: 'smooth', block: 'start', inline: 'nearest'};
        
        switch(id) {
            case 'home':
                this.homeRef.scrollIntoView(scrollOptions);
                break;

            case 'portfolio':
                this.portfolioRef.scrollIntoView(scrollOptions);
                break;

            case 'experiments':
                this.experimentsRef.scrollIntoView(scrollOptions);
                break;
            
            case 'about-me':
                this.aboutRef.scrollIntoView(scrollOptions);
                break;

            case 'contact':
                this.contactRef.scrollIntoView(scrollOptions);
                break;
            
            default:
                console.log(`updateDisplayedPage() "${id}" undefined - no action taken`);
                break;
        }
    }   

    onScroll(e) {
        e.preventDefault();
        const scrollTop = this.viewRef.scrollTop;

        //returns the current section the user is viewing
        let {currentSection, topSection} = updateViewSelection( scrollTop, this.pageHeight );

       if ( scrollTop >= this.pageHeight['home'] ) {
            this.navbarRef.classList.add('sticky');
        }

        else {
            this.navbarRef.classList.remove('sticky');                
        }

        if ( currentSection !== this.state.currentSection ) { 
            this.setState({ 
                currentSection: currentSection,
                topSection: topSection
            });
        }

        else {
            this.setState({ topSection });
        }
    }

    getSectionHeights() {        
        this.pageHeight['view'] = this.viewRef.clientHeight / 2;

        let currentHeight = this.homeRef.scrollHeight;
        this.pageHeight['home'] = currentHeight;

        currentHeight += this.portfolioRef.scrollHeight;
        this.pageHeight['portfolio'] = currentHeight;

        currentHeight += this.experimentsRef.scrollHeight;
        this.pageHeight['experiments'] = currentHeight;

        currentHeight += this.aboutRef.scrollHeight;
        this.pageHeight['about'] = currentHeight;

        //currentHeight += this.contactRef.scrollHeight;
        //this.pageHeight['contact'] = currentHeight;
        //console.log(this.pageHeight);
    }

    render() {
        //
        return (
            <div id='view-container' onScroll={this.onScroll}>
                <div className='scrollbar' id='sections-container' ref={el => this.viewRef = el}>    
                    <Nav setRef={el => this.navbarRef = el} section={this.state.currentSection} selection={this.updateDisplayedPage} />                

                    <HomePage setRef={el => this.homeRef = el} section={this.state.topSection} />
                    <Portfolio setRef={el => this.portfolioRef = el} />
                    <Experiments setRef={el => this.experimentsRef = el} />
                    <AboutMe setRef={el => this.aboutRef = el} />
                    <Contact setRef={el => this.contactRef = el} />
                </div>
            </div>
        );
    }
}

export default View;
