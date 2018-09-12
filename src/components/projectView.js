import React, {Component} from 'react';
import projects from './projectInfo';
import './style/projectView.css';

function isProjectValid(name) {
    return projects.hasOwnProperty(name);
}

//pass selectedIndex & name: projects[name].images[selectedIndex]
function DisplayProjectImage({ name, index, onChangeImg }) {
    const path = isProjectValid(name) ? projects[name].images[index] : '';

    return (
        <div id='project-img-container'>
            <span className='project-img-arrow-container' id='left-img-arrow' onClick={onChangeImg}>
                <img src='./images/arrow-left.svg' className='project-img-arrow' />
            </span>

            <img src={path} id='project-img' alt='' />

            <span className='project-img-arrow-container' id='right-img-arrow' onClick={onChangeImg}>
                <img src='./images/arrow-right.svg' className='project-img-arrow' />
            </span>
        </div>
    );
}

//pass name: projects[name].name
//           projects[name].description 
function DisplayProjectInfo({ name }) {
    const description = isProjectValid(name) ? projects[name].description : '';
    
    return (
        <div id='project-info-container'>
            <div className='project-info about'>
                <h2 className='project-header' id='project-name-header'>{name}</h2>
                <p className='project-description' id='about-description'>{description}</p>
            </div>
        </div>
    );
}

class ProjectView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
        };

        this.name = this.props.projectName.toLowerCase();
        this.onChangeImg = this.onChangeImg.bind(this); //user clicked one of the image arrows to go to the previous/next image
    }

    componentDidMount() {        
        if ( this.name !== this.name ) {
            console.log('updating name');
            this.name = this.props.projectName.toLowerCase();
        }
    }

    onChangeImg(e) {
        e.preventDefault();
        const id = e.currentTarget.id;
        let selectedIndex = id === 'left-img-arrow' ? (this.state.selectedIndex - 1) : (this.state.selectedIndex + 1);
        let totalImages;

        if ( isProjectValid(this.name) ) {
            totalImages = projects[this.name].images.length;

            if ( selectedIndex < 0 ) {
                selectedIndex = totalImages - 1;
            }

            else if ( selectedIndex >= totalImages ) {
                selectedIndex = 0;
            }

            this.setState({ selectedIndex });
        }
    }

    render() {
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <button className='btn round' id='portfolio-fullview-close-btn' onClick={this.props.onClose}>X</button>

                    <DisplayProjectImage name={this.name} index={this.state.selectedIndex} onChangeImg={this.onChangeImg} />
                    <DisplayProjectInfo name={this.name} />
                </div>
            </div>
        );
    }
}

export default ProjectView;