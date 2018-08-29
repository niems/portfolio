import React, {Component} from 'react';
import './style/testing.css';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.nodeLarge = 1.5;
        this.nodeSmall = 1;
    }

    render() {        
        return (
                <div className={`page-container`} id='testing-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 100 100">
                        <path className='grid horizontal' d='M0 10 H100' />
                        <path className='grid horizontal' d='M0 20 H100' />
                        <path className='grid horizontal' d='M0 30 H100' />
                        <path className='grid horizontal' d='M0 40 H100' />
                        <path className='grid horizontal' d='M0 50 H100' />
                        <path className='grid horizontal' d='M0 60 H100' />
                        <path className='grid horizontal' d='M0 70 H100' />
                        <path className='grid horizontal' d='M0 80 H100' />
                        <path className='grid horizontal' d='M0 90 H100' />

                        <path className='grid vertical' d='M10 0 V100' />
                        <path className='grid vertical' d='M20 0 V100' />
                        <path className='grid vertical' d='M30 0 V100' />
                        <path className='grid vertical' d='M40 0 V100' />
                        <path className='grid vertical' d='M50 0 V100' />
                        <path className='grid vertical' d='M60 0 V100' />
                        <path className='grid vertical' d='M70 0 V100' />
                        <path className='grid vertical' d='M80 0 V100' />
                        <path className='grid vertical' d='M90 0 V100' />

                        <path id='top-main' className='grid-design'  d='M10 10 L90 10' />
                        <circle className='grid-node' r={this.nodeLarge} cx='8.5' cy='10' />
                        <circle className='grid-node' r={this.nodeLarge} cx='91.5' cy='10' />                        

                        <path id='top-secondary' className='grid-design'  d='M20 15 L70 15' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='19' cy='15' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='71' cy='15' />
                    </svg>

                    <svg width="250" height="250" viewBox="0 0 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <rect x="50" y="50" width="100" height="100">
                            <animate attributeType="XML" attributeName="y" from="50" to="100" dur="0s" repeatCount='indefinite' />
                        </rect>
                    </svg>
                </div>                
        );
        
    }
}

export default Testing;