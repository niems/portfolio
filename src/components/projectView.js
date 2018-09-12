import React, {Component} from 'react';
import projects from './projectInfo';
import './style/projectView.css';

class ProjectView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            selectedImgPath: '',
            name: '',
            description: '',
        };

        this.onChangeImg = this.onChangeImg.bind(this); //user clicked one of the image arrows to go to the previous/next image
    }

    componentDidMount() {
        console.log(projects);
        
        if ( this.props.projectName === 'Roulette' ) {
            console.log('componentDidMount roulette');

            this.setState({
                selectedImgPath: projects.roulette.images[0],
                name: projects.roulette.name,
                description: projects.roulette.description
            });

            console.log('imagepath setting state: ', projects.roulette.images[0]);
        }        
    }

    onChangeImg(e) {
        e.preventDefault();
        const id = e.currentTarget.id;
        let selectedIndex = id === 'left-img-arrow' ? (this.state.selectedIndex - 1) : (this.state.selectedIndex + 1);
        let totalImages;

        if ( this.state.name === 'Roulette' ) {
            totalImages = projects.roulette.images.length;

            if ( selectedIndex < 0 ) {
                selectedIndex = totalImages - 1;
            }

            else if ( selectedIndex >= totalImages ) {
                selectedIndex = 0;
            }

            this.setState({
                selectedIndex: selectedIndex,
                selectedImgPath: projects.roulette.images[selectedIndex]
            });
        }
        
        console.log(id);
        console.log('selected index: ', selectedIndex);
        //this.setState({ selectedIndex });
    }

    render() {
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <button className='btn round' id='portfolio-fullview-close-btn' onClick={this.props.onClose}>X</button>
                    <h2 className='project-header' id='project-view-header'>{this.state.name}</h2>

                    <div id='project-img-container'>
                        <span className='project-img-arrow-container' id='left-img-arrow' onClick={this.onChangeImg}>
                            <img src='./images/arrow-left.svg' className='project-img-arrow' />
                        </span>

                        <img src={this.state.selectedImgPath} id='project-img' alt='' />

                        <span className='project-img-arrow-container' id='right-img-arrow' onClick={this.onChangeImg}>
                            <img src='./images/arrow-right.svg' className='project-img-arrow' />
                        </span>
                    </div>

                    <div id='project-info-container'>
                        <div className='project-info about'>
                            <h3 className='project-header' id='project-about-header'>About this project</h3>
                            <p id='project-view-description'>{this.state.description}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        );

        /*
        return (
            <div id='portfolio-fullview-container'>
                <div id='portfolio-fullview'>
                    <button className='btn round' id='portfolio-fullview-close-btn' onClick={this.props.onClose}>X</button>

                    <h2 className='project-header' id='project-view-header'>{this.state.name}</h2>

                    <span className='project-img-arrow-container' id='left-img-arrow' onClick={this.onChangeImg}>
                        <img src='./images/arrow-left.svg' className='project-img-arrow' />
                    </span>
                    <div id='project-img-container'>
                        <img src={this.state.selectedImgPath} id='project-img' alt=''/>
                    </div>
                    <span className='project-img-arrow-container' id='right-img-arrow' onClick={this.onChangeImg}>
                        <img src='./images/arrow-right.svg' className='project-img-arrow' />
                    </span>

                    <div className='project-info about'>
                        <h3 className='project-header' id='project-about-header'>About this project</h3>
                        <p id='project-view-description'>{this.state.description}</p>
                    </div>

                    <div className='project-info tech'>
                        <h3 className='project-header' id='project-tech-stack-header'>Tech Stack</h3>
                        <ul id='project-tech-stack-list'>
                            <li className='project-tech-stack-item'>
                                Electron
                            </li>
                            <li className='project-tech-stack-item'>
                                Node
                            </li>
                            <li className='project-tech-stack-item'>
                                React
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
        */
    }
}

export default ProjectView;