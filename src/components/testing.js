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

                        <path id='top-main' className='grid-design'  d='M10 10 L90 10'/>
                        <circle className='grid-node' r={this.nodeLarge} cx='8.5' cy='10' />
                        <circle className='grid-node' r={this.nodeLarge} cx='91.5' cy='10' />                        

                        <path id='top-secondary' className='grid-design'  d='M20 15 L70 15' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='19' cy='15' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='71' cy='15' />



                        <path id='mid-main' className='grid-design' d='M80 20 L60 40' />
                        <circle className='grid-node' r={this.nodeLarge} cx='81.5' cy='18.5' />
                        <circle className='grid-node' r={this.nodeLarge} cx='58.5' cy='41.5' />

                        <path id='mid-main' className='grid-design' d='M50 50 L10 88' />
                        <circle className='grid-node' r={this.nodeLarge} cx='51.5' cy='48.5' />
                        <circle className='grid-node' r={this.nodeLarge} cx='8.5' cy='89.5' />

                        <path id='mid-secondary' className='grid-design' d='M80 30 L40 70' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='81' cy='29' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='39' cy='71' />



                        <path id='bottom-main' className='grid-design' d='M25 90 L90 90' />
                        <circle className='grid-node' r={this.nodeLarge} cx='23.5' cy='90' />
                        <circle className='grid-node' r={this.nodeLarge} cx='91.5' cy='90' />

                        <path id='bottom-secondary' className='grid-design' d='M32 86 h10' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='31' cy='86' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='42' cy='86' />

                        <path id='bottom-secondary' className='grid-design' d='M52 86 L86 86' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='51' cy='86' />
                        <circle className='grid-node small' r={this.nodeSmall} cx='87' cy='86' />

                    </svg>
                </div>                
        );
        
    }
}

export default Testing;