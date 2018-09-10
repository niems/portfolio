import React, {Component} from 'react';
import './style/projectView.css';

class ProjectView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        }

        this.onChangeImg = this.onChangeImg.bind(this); //user clicked one of the image arrows to go to the previous/next image
    }

    onChangeImg(e) {
        e.preventDefault();
        const id = e.currentTarget.id;
        let selectedIndex = this.state.selectedIndex;
        
        if ( id === 'left-img-arrow' ) {
            selectedIndex--;
            
            if ( selectedIndex < 0 ) {
                selectedIndex = this.props.project.images.length - 1;
            }
        }
        
        else if ( id === 'right-img-arrow' ) {
            selectedIndex++;
            
            if ( selectedIndex >= this.props.project.images.length ) {
                selectedIndex = 0;
            }
        }
        
        console.log(id);
        console.log('selected index: ', selectedIndex);
        this.setState({ selectedIndex });
    }

    render() {
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <button className='btn round' id='portfolio-fullview-close-btn' onClick={this.props.onClose}>X</button>

                    <h2 id='project-view-header'>{this.props.project.title}</h2>

                    <span className='project-img-arrow-container' id='left-img-arrow' onClick={this.onChangeImg}>
                        <img src='./images/arrow-left.svg' className='project-img-arrow' />
                    </span>
                    <div id='project-img-container'>
                        <img src={this.props.project.images[this.state.selectedIndex]} id='project-img' alt='failed to load selected project image'/>
                    </div>
                    <span className='project-img-arrow-container' id='right-img-arrow' onClick={this.onChangeImg}>
                        <img src='./images/arrow-right.svg' className='project-img-arrow' />
                    </span>

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