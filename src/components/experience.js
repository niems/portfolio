import React, {Component} from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`page-container ${this.props.direction}`} id='experience-container'>
                experience
            </div>
        );
    }
}

export default Experience;