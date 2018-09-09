import React, {Component} from 'react';
import './style/particleLayer.css';

import 'particles.js/particles';  
const particlesJS = window.particlesJS;  

class ParticleLayer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        particlesJS.load("particles-js", './particles.json');

    }

    render() {
        return (
            <div id='particles-js'></div> 
        );
    }
}

export default ParticleLayer;