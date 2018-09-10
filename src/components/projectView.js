import React, {Component} from 'react';
import './style/projectView.css';

class ProjectView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <button className='btn round' id='portfolio-fullview-close-btn' onClick={this.props.onClose}>X</button>

                    <h2 id='project-view-header'>{this.props.project.title}</h2>

                    <div id='project-img-container'>
                        <img src={this.props.project.images[this.state.selectedIndex]} id='project-img' alt='failed to load selected project image'/>
                    </div>

                    <p id='project-view-description'>{this.props.project.description}</p>
                </div>
            </div>
        );

        /*
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <button id='portfolio-fullview-close-btn' className='btn round' onClick={this.props.onClose}>X</button>

                    <div id='project-img-container'>
                        <img src={this.props.images[this.state.selectedIndex]} id='project-img' alt='failed to load selected project image'/>
                    </div>
                </div>
            </div>
        );
        */
    }
}

export default ProjectView;

/*
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
*/