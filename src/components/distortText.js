import React, {Component} from 'react';

class DistortText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.target = 'distort text'; 
        this.minDistortion = 1; //min number of character switches before getting to the target character
        this.maxDistortion = 5; //max number of character switches before getting to the target character
        this.pauseBetweenDistortion = 500; //number of miliseconds to pause before updating the text

        this.update = this.update.bind(this);
    }

    componentDidMount() {
        
    }

    update() {

    }

    render() {
        return null;
    }
}

export default DistortText;