import React, {Component} from 'react';
import projects from './projectInfo';
import './style/projectView.css';

function isProjectValid(name) {
    return projects.hasOwnProperty(name);
}

function DisplayProjectImage({ previousImg, selectedImg, onChangeImg }) {
    return (
        <div id='project-img-container'>
            <span className='project-img-arrow-container' id='left-img-arrow' onClick={onChangeImg}>
                <img src='./images/arrow-left.svg' className='project-img-arrow' alt='failed to load left nav arrow'/>
            </span>

            {previousImg}
            {selectedImg}

            <span className='project-img-arrow-container' id='right-img-arrow' onClick={onChangeImg}>
                <img src='./images/arrow-right.svg' className='project-img-arrow' alt='failed to load right nav arrow'/>
            </span>
        </div>
    );
}

function DisplayProjectInfo({ name }) {
    let description, projectName, projectType;

    if ( isProjectValid(name) ) {
        description =  projects[name].description;
        projectName = name[0].toUpperCase() + name.slice(1);
        projectType = projects[name].type;
    }    

    return (
        <div id='project-info-container'>
            <div className='project-info about'>
                <h2 className='project-header' id='project-name-header'>{projectName}</h2>
                <h3 className='project-header' id='project-type-header'>{projectType}</h3>
                <hr />
                <p className='project-description' id='about-description'>{description}</p>
            </div>
        </div>
    );
}

class ProjectView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousImg: '',
            selectedImg: '',
        };

        this.direction = 'forward'; //direction selected image comes in from
        this.previousIndex = 0; //previous index of project image displayed - slides off screen based on direction
        this.selectedIndex = 0; //current index of project image displayed
        this.onChangeImg = this.onChangeImg.bind(this); //user clicked one of the image arrows to go to the previous/next image
    }

    componentDidMount() {        
        if ( isProjectValid( this.props.projectName.toLowerCase() ) ) {
            let selectedPath = projects[this.props.projectName.toLowerCase()].images[0];
            let selectedImg = (<img src={selectedPath} className={`project-img ${this.direction}`} alt='' />);
    
            this.setState({ selectedImg });
        }
    }

    onChangeImg(e) {
        e.preventDefault();
        const id = e.currentTarget.id;
        
        let totalImages;
        let direction;
        this.previousIndex = this.selectedIndex; //new previous index

        if (id === 'left-img-arrow') {
            this.selectedIndex -= 1;
            direction = 'backward';

            direction = this.direction === 'backward' ? 'backward active' : 'backward';
            this.direction = direction; //updates current direction
        }

        else {
            this.selectedIndex += 1;
            direction = 'forward';

            direction = this.direction === 'forward' ? 'forward active' : 'forward';
            this.direction = direction; //updates current direction
        }

        if ( isProjectValid(this.props.projectName.toLowerCase()) ) {
            totalImages = projects[this.props.projectName.toLowerCase()].images.length;

            let previousPath,
                previousImg,
                selectedPath,
                selectedImg;

            if ( this.selectedIndex < 0 ) {
                this.selectedIndex = totalImages - 1;
            }

            else if ( this.selectedIndex >= totalImages ) {
                this.selectedIndex = 0;
            }

            previousPath = projects[this.props.projectName.toLowerCase()].images[this.previousIndex];
            previousImg = (<img src={previousPath} className={`project-img offscreen ${direction}`} alt='' />);

            selectedPath = projects[this.props.projectName.toLowerCase()].images[this.selectedIndex];
            selectedImg = (<img src={selectedPath} className={`project-img ${direction}`} alt='' />);

            this.setState({ 
                previousImg,
                selectedImg,
            });

            console.log(`direction: ${direction}`);
            console.log(`previousIndex: ${this.previousIndex}`);
            console.log(`selectedIndex: ${this.selectedIndex}\n\n`);
        }
    }

    render() {
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <DisplayProjectImage previousImg={this.state.previousImg} selectedImg={this.state.selectedImg} onChangeImg={this.onChangeImg} />
                    <DisplayProjectInfo name={this.props.projectName.toLowerCase()} />

                    <button className='btn round' id='portfolio-fullview-close-btn' onClick={this.props.onClose}>X</button>
                </div>
            </div>
        );
    }
}

export default ProjectView;