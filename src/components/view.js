import React, {Component} from 'react';
import Navbar from './navbar';
import HomePage from './homePage';
import Experiments from './experiments';
import Portfolio from './portfolio';
import Contact from './contact';
import Menu from './menu';

import Testing from './testing';
import './style/view.css';

//returns the current section the user is viewing
//this is based on the section currently in the center of the view
function updateViewSelection( scrollTop, data ) {
    const midpoint = scrollTop + data['view'];
    let section = ''; //section in the middle of the viewport - what will be selected in the navbar

    if ( midpoint <= data['home'] ) {
        section = 'home';
    }

    else if ( midpoint <= data['portfolio'] ) {
        section = 'portfolio';
    }

    else if ( midpoint <= data['experiments'] ) {
        section = 'experiments';
    }

    else if ( midpoint <= data['contact'] ) {
        section = 'contact';
    }

    return section;
}

class View extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentSection: 'home', //section on the majority of the screen
            displayMenu: null
        };

        this.pageHeight = {
            'view': -1,
            'home': -1,
            'portfolio': -1,
            'experiments': -1,
            'contact': -1
        };

        this.homeRef = null;
        this.portfolioRef = null;
        this.experimentsRef = null;
        this.contactRef = null;

        this.navbarRef = null;

        this.onMenuToggle = this.onMenuToggle.bind(this); //toggles the menu on/off
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

    onMenuToggle(e) {
        e.preventDefault();

        this.setState({
            displayMenu: this.state.displayMenu === null ? (<Menu onSelect={this.updateDisplayedPage} onClose={this.onMenuToggle} />) : null
        });
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

            case 'contact':
                this.contactRef.scrollIntoView(scrollOptions);
                break;
            
            default:
                console.log(`updateDisplayedPage() "${id}" undefined - no action taken`);
                break;
        }
        
        //closes menu since a page was selected
        if ( this.state.displayMenu !== null ) {
            this.setState ({
                displayMenu: null
            });
        }
    }   

    onScroll(e) {
        e.preventDefault();
        const scrollTop = this.viewRef.scrollTop;

        //returns the current section the user is viewing
        let currentSection = updateViewSelection( scrollTop, this.pageHeight );


       if ( scrollTop >= this.pageHeight['home'] ) {
            this.navbarRef.classList.add('sticky');
    }

        else {
            this.navbarRef.classList.remove('sticky');                
        }

        if ( currentSection !== this.state.currentSection ) { 
            this.setState({ currentSection });
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

        currentHeight += this.contactRef.scrollHeight;
        this.pageHeight['contact'] = currentHeight;

        console.log(this.pageHeight);
    }

    render() {
        return (
            <div id='view-container' onScroll={this.onScroll}>
                {this.state.displayMenu}

                <div className='scrollbar' id='sections-container' ref={el => this.viewRef = el}>                    
                    <Navbar setRef={el => this.navbarRef = el} section={this.state.currentSection} selection={this.updateDisplayedPage} onMenu={this.onMenuToggle} />

                    <HomePage setRef={el => this.homeRef = el} selection={this.updateDisplayedPage} />
                    <Portfolio setRef={el => this.portfolioRef = el} />
                    <Experiments setRef={el => this.experimentsRef = el} />
                    <Contact setRef={el => this.contactRef = el} />
                </div>
            </div>
        );
    }
}

export default View;