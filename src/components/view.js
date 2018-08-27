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
            displayed: {
                name: 'home',
                component: <HomePage setRef={el => this.homeRef = el} />
            },

            displayMenu: null
        };

        this.displayOrder = [
            'home',
            'portfolio',
            'experiments',
            'contact'
        ];

        this.homeRef = null;
        this.portfolioRef = null;
        this.experimentsRef = null;
        this.contactRef = null;

        this.onMenuToggle = this.onMenuToggle.bind(this); //toggles the menu on/off
        this.updateDisplayedPage = this.updateDisplayedPage.bind(this); 

        //TESTING ONLY
        this.testing = false;
        this.testLoop = this.testLoop.bind(this);
    }

    componentDidMount() {
        if ( this.testing )
            this.testLoop();
    }

    componentWillUnmount() {
        if ( this.testing )
            clearInterval( this.testTimerId );
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

    render() {
        return (
            <div id='view-container'>
                <Navbar selection={this.updateDisplayedPage} onMenu={this.onMenuToggle} />
                {this.state.displayMenu}

                <div id='sections-container'>                    
                    <HomePage setRef={el => this.homeRef = el} />
                    <Portfolio setRef={el => this.portfolioRef = el} />
                    <Experiments setRef={el => this.experimentsRef = el} />
                    <Contact setRef={el => this.contactRef = el} />
                </div>
            </div>
        );
    }
}

export default View;