import React, {Component} from 'react';
import ProjectView from './projectView';
import './style/portfolio.css';

function DisplayProject({ name, tech, onClick }) {
    return (
        <div className={`portfolio-project-container ${name}`}>

            <div className='portfolio-project-hover-info'>
                <span className='portfolio-project-header'>
                    <h3 className='portfolio-project-name'>{name}</h3>
                    <h4 className='portfolio-project-tech'>{tech}</h4>
                </span>

                <button id='learn-more' className='btn slide-in halved' type='button' onClick={e => onClick(e, name)}>more info</button>
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
        
        if ( this.state.projectFullView !== null ) { //project already being displayed
            this.setState({
                projectFullView: null
            }, () => {
                setTimeout(() => {
                    this.setState({
                        projectFullView: (<ProjectView projectName={project} onClose={this.onCloseFullscreen} />)            
                    });
                }, 0);
            })
        }

        else { //no project currently displayed
            this.setState({      
                projectFullView: (<ProjectView projectName={project} onClose={this.onCloseFullscreen} />)            
            });
        }
    }

    onCloseFullscreen(e) {
        e.preventDefault();
        this.setState({ projectFullView: null });
    }

    render() {
        return (
            <div className={`page-container`} id='portfolio-container' ref={this.props.setRef}>
                {this.state.projectFullView}

                <div id='portfolio-header-container'>
                    <h2 id='portfolio-header' className='section-header'>Projects</h2>
                    <p id='portfolio-description' className='section-description'>
                        {`From SVG animations using `}
                        <a className='text-highlight' href='https://sass-lang.com/' target='_blank' rel='noopener noreferrer'>Sass</a>
                        {` (preprocessed CSS) to `} 
                        <a className='text-highlight' href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React.js</a>
                        {`, `}
                        <a className='text-highlight' href='https://nodejs.org/about/' target='_blank' rel='noopener noreferrer'>Node.js</a>
                        {`, `}
                        <a className='text-highlight' href='https://socket.io/' target='_blank' rel='noopener noreferrer'>Socket.IO</a>
                        {`, and `}
                        <a className='text-highlight' href='https://webrtc.org/' target='_blank' rel='noopener noreferrer'>WebRTC</a>
                        {`. Check out a few of my latest projects.`}
                    </p>
                </div>

                <div id='portfolio-projects'>
                    <DisplayProject name='Roulette' tech='Node.js | React | Socket.IO | WebRTC' onClick={this.onFullscreenProject} />
                    <DisplayProject name='Whisper' tech='Electron | Node.js | React | Socket.IO' onClick={this.onFullscreenProject} />
                    <DisplayProject name='Word-Connect' tech='Electron | Node | React | IndexedDB' onClick={this.onFullscreenProject} />

                </div>
            </div>
        );
    }
}

export default Portfolio;