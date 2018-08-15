import React, {Component} from 'react';
import Navbar from './navbar';
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

        this.displayOrder = [
            'home',
            'experience',
            'projects',
            'contact'
        ];

        this.updateDisplayedPage = this.updateDisplayedPage.bind(this);
    }

    updateDisplayedPage(id) {
        if (id !== this.state.displayed.name) {
            let component = null;
            let direction = 'forward';

            if ( this.displayOrder.indexOf(this.state.displayed.name) > this.displayOrder.indexOf(id) ) {
                direction = 'backward';
            }

            switch(id) {
                case 'home':
                    component = (<LandingPage direction={direction} />);
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
            }

            if ( component !== null ) {
                this.setState({
                    displayed: {
                        name: id,
                        component: component
                    }
                });
            }
        }
    }

    render() {
        return (
            <div id='view-container'>
                <Navbar selection={this.updateDisplayedPage} />

                <div id='sections-container'>
                    {this.state.displayed.component}
                </div>
            </div>
        );
    }
}

export default View;