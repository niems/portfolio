import React, {Component} from 'react';
import './style/testing.css';

class Testing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        /*
        return (
                <div className={`page-container`} id='testing-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
                        
                    </svg>
                </div>                
        );
        */
        
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

                        <path className='grid-design'  d='M0 0 L100 0 L0 100 L100 100'/>
                        <path className='grid-design test'  />
                        <path className='grid-design'  />
                        <path className='grid-design test'  />
                        <path className='grid-design'  />
                        <path className='grid-design'  />
                        

                    </svg>
                </div>                
        );
        
    }
}

export default Testing;