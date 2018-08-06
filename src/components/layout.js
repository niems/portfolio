import React, {Component} from 'react';
import Inputfield from './inputfield';
import './style/layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='layout-wrapper'>
                <Inputfield inputType='emoji-and-submit' />
            </div>
        );
    }
}

export default Layout;