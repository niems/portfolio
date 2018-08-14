import React, {Component} from 'react';
import Navbar from './navbar';
//import Nav from './nav';
import LandingPage from './landingPage';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import './style/view.css';

class View extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            displayed: {
                name: 'home',
                component: <LandingPage />
            }
        };

        this.navbarSelect = this.navbarSelect.bind(this); //selected a navbar section
    }

    onWheel(e) {
        e.preventDefault();  
        console.log('onWheel()');
        
        //
    } 

    navbarSelect(e) {
        e.preventDefault();
        const id = e.currentTarget.id.replace('-link', ''); //removes -link from the navbar selection

    }



    render() {
        return (
            <div id='view-container'>
                <Navbar selection={this.navbarSelect} />

                <div id='sections-container'>
                    {this.state.displayed.component}
                </div>
            </div>
        );
    }
}

export default View;