import React, {Component} from 'react';
import Navbar from './navbar';
import HomePage from './homePage';
import Experience from './experience';
import Projects from './projects';
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
                component: null
            },

            displayMenu: null
        };

        this.displayOrder = [
            'home',
            'experience',
            'projects',
            'contact'
        ];

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
            displayMenu: this.state.displayMenu === null ? (<Menu onClose={this.onMenuToggle} />) : null
        });
    }

    testLoop() {
        console.log('testLoop()');
        //cycles through pages below over interval given
        const pageDuration = 15000; //miliseconds
        //create callback for when the animation is finished to avoid using page duration...
        //callback can be triggered once the timer is removed.

        const pageCycle = [
            'projects',
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
        if (id !== this.state.displayed.name) {
            let component = null; //current page displayed

            //determines the direction the page animates in
            let direction = ( this.displayOrder.indexOf(this.state.displayed.name) > this.displayOrder.indexOf(id) )
                            ? 'bottom' : 'top';

            switch(id) {
                case 'home':
                    //component = (<LandingPage direction={direction} />);
                    component = (<HomePage direction={direction} />);
                    break;
                
                case 'experience':
                    component = (<Experience direction={direction} />);
                    break;

                case 'projects':
                    component = (<Projects direction={direction} />);
                    break;

                case 'contact':
                    component = (<Contact direction={direction} />);
                    break;

                case 'menu':
                    component = null;
                    break;
            }

            if ( component !== null ) {
                this.setState({
                    displayed: {
                        name: id,
                        component: component
                    }

                }, this.arrowNavUpdate);
            }
        }
    }

    render() {
        return (
            <div id='view-container'>
                <Navbar selection={this.updateDisplayedPage} onMenu={this.onMenuToggle} />
                {this.state.displayMenu}

                <div id='sections-container'>                    
                    {this.state.displayed.component}
                </div>
            </div>
        );
    }
}

export default View;