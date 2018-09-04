import React, {Component} from 'react';
import Navbar from './navbar';
import HomePage from './homePage';
import Experiments from './experiments';
import Portfolio from './portfolio';
import Contact from './contact';
import Menu from './menu';

import Testing from './testing';

import './style/view.css';

class View extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentSection: 'home', //section on the majority of the screen
            displayMenu: null
        };

        this.displayInfo = {
            home: {
                startHeight: -1,
                endHeight: -1
            },
            portfolio: {
                startHeight: -1,
                endHeight: -1
            },
            experiments: {
                startHeight: -1,
                endHeight: -1
            },
            contact: {
                startHeight: -1,
                endHeight: -1
            },
        };

        this.homeRef = null;
        this.portfolioRef = null;
        this.experimentsRef = null;
        this.contactRef = null;

        this.onMenuToggle = this.onMenuToggle.bind(this); //toggles the menu on/off
        this.updateDisplayedPage = this.updateDisplayedPage.bind(this); 

        this.getSectionHeights = this.getSectionHeights.bind(this); //gets the start/end scroll height for each section

        //TESTING ONLY
        this.testing = false;
        this.testLoop = this.testLoop.bind(this);

        this.viewRef = null;
        this.onScroll = this.onScroll.bind(this);
        this.onResize = this.onResize.bind(this); //gets the new section heights if the screen is resized
    }

    componentDidMount() {
        this.getSectionHeights();
        window.addEventListener('resize', this.onResize);

        if ( this.testing )
            this.testLoop();
    }

    componentWillUnmount() {
        if ( this.testing )
            clearInterval( this.testTimerId );
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

    testLoop() {
        console.log('testLoop()');
        //cycles through pages below over interval given
        const pageDuration = 15000; //miliseconds
        //create callback for when the animation is finished to avoid using page duration...
        //callback can be triggered once the timer is removed.

        const pageCycle = [
            'portfolio',
            'home',
            'contact',
            'home'
        ];

        let currentPageIndex = 0;
        this.testTimerId = setInterval(() => {
            this.updateDisplayedPage( pageCycle[currentPageIndex] );

            currentPageIndex = (currentPageIndex + 1) === pageCycle.length
                             ? 0 : currentPageIndex + 1;
        }, pageDuration);
    }

    updateDisplayedPage(id) {
        console.log(`updateDisplayedPage() id: ${id}\n`);
        const scrollOptions = {behavior: 'smooth', block: 'start', inline: 'nearest'};
        //console.log(`type: ${typeof(this.ref[id])}\n`);
        
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
        
        const csh = this.viewRef.scrollTop; //csh = current scroll height
        let currentSection = '';

        if ( csh >= this.displayInfo.contact.startHeight ) {
            currentSection = 'contact';
        }

        else if ( csh >= this.displayInfo.experiments.startHeight ) {
            currentSection = 'experiments';
        }

        else if ( csh >= this.displayInfo.portfolio.startHeight ) {
            currentSection = 'portfolio';
        }

        else {
            currentSection = 'home';
        }

        if ( currentSection !== this.state.currentSection ) {
            this.setState({ currentSection });
        }
    }

    getSectionHeights() {        
        let currentHeight = this.homeRef.scrollHeight;
        this.displayInfo.home.startHeight = 0;
        this.displayInfo.home.endHeight = currentHeight;

        currentHeight += this.portfolioRef.scrollHeight;
        this.displayInfo.portfolio.startHeight = this.displayInfo.home.endHeight;
        this.displayInfo.portfolio.endHeight = currentHeight;

        currentHeight += this.experimentsRef.scrollHeight;
        this.displayInfo.experiments.startHeight = this.displayInfo.portfolio.endHeight;
        this.displayInfo.experiments.endHeight = currentHeight;

        

        currentHeight += this.contactRef.scrollHeight;
        this.displayInfo.contact.startHeight = this.displayInfo.experiments.endHeight;
        this.displayInfo.contact.endHeight = currentHeight;

        console.log('new section heights: ', this.displayInfo);
    }

    render() {
        return (
            <div id='view-container' onScroll={this.onScroll}>
                <Navbar section={this.state.currentSection} selection={this.updateDisplayedPage} onMenu={this.onMenuToggle} />
                {this.state.displayMenu}

                <div id='sections-container' ref={el => this.viewRef = el}>                    
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