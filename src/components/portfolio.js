import React, {Component} from 'react';
import ProjectView from './projectView';
import AutoText from './autoText';
import './style/portfolio.css';

function DisplayProject({ name, tech, onClick }) {
    return (
        <div className={`portfolio-project-container ${name}`}>

            <div className='portfolio-project-hover-info'>
                <span className='portfolio-project-header'>
                    <h3 className='portfolio-project-name'>{name}</h3>
                    <h4 className='portfolio-project-tech'>{tech}</h4>
                </span>

                <button className='btn learn-more' onClick={e => onClick(e, name)}>learn more</button>
            </div>

        </div>
    );
}


class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectFullView: null //displays a single project as the fullview - user clicked "learn more"
        };

        this.onFullscreenProject = this.onFullscreenProject.bind(this);
        this.onCloseFullscreen = this.onCloseFullscreen.bind(this);
    }

    onFullscreenProject(e, project) {
        e.preventDefault();
        console.log('onFullscreenProject() project selected: ', project);

        this.setState({      
            projectFullView: (<ProjectView projectName={project} onClose={this.onCloseFullscreen} />)            
        });
    }

    onCloseFullscreen(e) {
        e.preventDefault();

        this.setState({ projectFullView: null });
    }

    render() {
        return (
            <div className={`page-container`} id='portfolio-container' ref={this.props.setRef}>
                {this.state.projectFullView}

                <h2 className='portfolio-header section-header'>Projects</h2>
                
                <div id='portfolio-projects'>
                    <DisplayProject name='Roulette' tech='Node + React + Socket.IO + WebRTC' onClick={this.onFullscreenProject} />
                    <DisplayProject name='Whisper' tech='Electron + Node + React + Socket.IO' onClick={this.onFullscreenProject} />
                    <DisplayProject name='placeholder project' tech='...' onClick={this.onFullscreenProject} />

                </div>
            </div>
        );
    }
}

export default Portfolio;