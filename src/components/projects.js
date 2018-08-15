import React, {Component} from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`page-container ${this.props.direction}`} id='projects-container'>
                projects
            </div>
        );
    }
}

export default Projects;