import React, {Component} from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.setRef = element => {
            this.props.setRef('projects', element);
        }
    }

    render() {
        return (
            <section className='section-container' id='projects' ref={this.setRef}>
                projects
            </section>
        );
    }
}

export default Projects;