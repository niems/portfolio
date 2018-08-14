import React, {Component} from 'react';
//import Navbar from './navbar';
import Nav from './nav';
import LandingPage from './landingPage';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import './style/view.css';

class View extends Component {
    constructor(props) {
        super(props);
        
        
        this.navbarSelect = this.navbarSelect.bind(this); //selected a navbar section

        this.acceptScrollData = true; //if set to false: user has just scrolled; new scroll data not accepted for 500ms
        this.onWheel = this.onWheel.bind(this);
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
        console.log('onWheel()');
        
        //
    } 

    navbarSelect(e) {
        e.preventDefault();

        const id = e.currentTarget.id.replace('-link', ''); //removes -link from the navbar selection
        this.scrollIndex = this.display.indexOf(id); //scroll index for new page

    }



    render() {
        return (
            <div id='view-container' onWheel={this.onWheel}>
                <Nav selection={this.navbarSelect} />

                <div id='sections-container'>
                    
                </div>
            </div>
        );
    }
}

export default View;

/*
<Navbar selection={this.navbarSelect} />
<svg>
    <circle />
    Sorry, your browser does not support SVG.  
</svg> 
*/