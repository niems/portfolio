import React, {Component} from 'react';
import projects from './projectInfo';
import './style/projectView.css';

function isProjectValid(name) {
    return projects.hasOwnProperty(name);
}

function Image({ path, classes }) {
    return (
        <img src={path} className={classes} alt='' />
    )
}

//pass selectedIndex & name: projects[name].images[selectedIndex]
function DisplayProjectImage({ name, direction, index, onChangeImg }) {
    const path = isProjectValid(name) ? projects[name].images[index] : '';
    const imgClasses = `project-img ${direction}`;

    return (
        <React.Fragment>
        <div id='project-img-container'>
            <span className='project-img-arrow-container' id='left-img-arrow' onClick={onChangeImg}>
                <img src='./images/arrow-left.svg' className='project-img-arrow' />
            </span>

            <Image path={path} classes={imgClasses} />

            <span className='project-img-arrow-container' id='right-img-arrow' onClick={onChangeImg}>
                <img src='./images/arrow-right.svg' className='project-img-arrow' />
            </span>

        </div>
        </React.Fragment>
    );
}

//pass name: projects[name].name
//           projects[name].description 
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
            selectedIndex: 0,
            direction: 'forward'
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
        //let selectedIndex = id === 'left-img-arrow' ? (this.state.selectedIndex - 1) : (this.state.selectedIndex + 1);
        let totalImages;
        let direction;
        let selectedIndex;

        if (id === 'left-img-arrow') {
            selectedIndex = this.state.selectedIndex - 1;
            direction = 'backward';
        }

        else {
            selectedIndex = this.state.selectedIndex + 1;
            direction = 'forward';
        }

        if ( isProjectValid(this.name) ) {
            totalImages = projects[this.name].images.length;

            if ( selectedIndex < 0 ) {
                selectedIndex = totalImages - 1;
            }

            else if ( selectedIndex >= totalImages ) {
                selectedIndex = 0;
            }

            this.setState({ 
                selectedIndex,
                direction
            });

            console.log(`direction: ${direction}`);
        }
    }

    render() {
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <DisplayProjectImage name={this.name} direction={this.state.direction} index={this.state.selectedIndex} onChangeImg={this.onChangeImg} />
                    <DisplayProjectInfo name={this.name} />

                    <button className='btn round' id='portfolio-fullview-close-btn' onClick={this.props.onClose}>X</button>
                </div>
            </div>
        );
    }
}

export default ProjectView;