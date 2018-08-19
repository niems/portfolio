import React, {Component} from 'react';
import AutoText from './autoText';


class Projects extends Component {
    constructor(props) {
        super(props);

        this.autoTextSetup = {
            loop: true,
            dynamicStrings: [
                'An empty project page D:',
                'What a surprise :o',
                'Maybe put projects here instead...'
            ],
        };
    }

    render() {
        return (
            <div className={`page-container ${this.props.direction}`} id='projects-container'>
                <AutoText setup={this.autoTextSetup} />
            </div>
        );
    }
}

export default Projects;