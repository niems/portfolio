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
    }

    render() {
        return (
            <div id='layout-container'>
                <Navbar />

                <div id='layout-sections'>
                    <LandingPage />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Layout;