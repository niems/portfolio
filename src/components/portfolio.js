import React, {Component} from 'react';
import AutoText from './autoText';
import './style/portfolio.css';


function DisplayFullView({ onClose }) {
    const propImages = [
        './images/projects/roulette/roulette.png',
        './images/projects/placeholder-project.png',
        './images/projects/roulette/roulette.png',
        './images/projects/placeholder-project.png',
        './images/projects/roulette/roulette.png',
        './images/projects/placeholder-project.png',
        './images/projects/roulette/roulette.png',
        './images/projects/placeholder-project.png',
    ];

    const selectedImg = propImages[0];
    const projectImages = propImages.map((path, index) => <span className='project-collection-item'>{index + 1}</span>);
    //const projectImages = propImages.map(imgPath => <img src={imgPath} className='project-collection-img' alt='failed to load project collection img'/>);
    
    return (
        <div id='portfolio-fullview-container'>
            <div id='portfolio-fullview'>
                <button id='portfolio-fullview-close-btn' className='btn round' onClick={onClose}>X</button>

                <div id='project-img-container'>
                    <img src={selectedImg} id='project-img' alt='failed to load selected project image'/>

                    <div id='project-collection-all-items'>{projectImages}</div>
                </div>
            </div>
        </div>
    );
}

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

        this.autoTextSetup = {
            loop: true,
            dynamicStrings: [
                'An empty portfolio page D:',
                'What a surprise :o',
                'Maybe put projects here instead...'
            ],
        };

        this.onFullscreenProject = this.onFullscreenProject.bind(this);
        this.onCloseFullscreen = this.onCloseFullscreen.bind(this);
    }

    onFullscreenProject(e, project) {
        e.preventDefault();
        
        console.log('onFullscreenProject() project selected: ', project);

        this.setState({
            projectFullView: (<DisplayFullView onClose={this.onCloseFullscreen} />)
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