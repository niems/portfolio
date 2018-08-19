import React, {Component} from 'react';
import './style/distortText.css';

/*
    pass options as object under 'setup'. ex. this.props.setup

    **REQUIRED:
        target (string): the final text displayed once the distortion effect is finished

    OPTIONALLY passed in this.props.setup object:
        delay (INTEGER): number of miliseconds to pause before starting the distortion effect - nothing will display until the delay elapses
        minDistortion (INTEGER): min number of character switches before getting to the target character
        maxDistortion (INTEGER): max number of character switches before getting to the target character
        pauseBetweenDistortion (INTEGER): number of miliseconds to pause before updating the text
        distortionList (CHARACTER ARRAY): where the distortions are chosen from
        effect(string): determines if an effect is applied to the distorted text (effect doesn't apply on final text)
            EFFECT LIST:
                spaced-out - adds a space after every distorted character
*/

class DistortText extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }

        //stores the remaining distortions for each character to display before the final character(not distorted)
        this.target = [
            /*
            {
                final: 'd',
                distortionsRemaining: ['&', '^', '%']
            }
            */
        ];
        
        this.delay = this.props.setup.delay === undefined ? 500 : this.props.setup.delay;
        this.effect = this.props.setup.effect === undefined ? '' : this.props.setup.effect
        this.minDistortion = this.props.setup.minDistortion === undefined ? 5 : this.props.setup.minDistortion; 
        this.maxDistortion = this.props.setup.maxDistortion === undefined ? 20 : this.props.setup.maxDistortion;
        this.pauseBetweenDistortion = this.props.setup.pauseBetweenDistortion === undefined ? 50 : this.props.setup.pauseBetweenDistortion;
        this.distortionList = this.props.setup.distortionList === undefined
                                                              ? ['!', '#', '%', '&', '*', '+', '-', '/', '>', '<', '?', '^', '_', '{', '}']
                                                              : this.props.setup.distortionList;

        this.setupDistortions = this.setupDistortions.bind(this); //setup for distortion text
        this.setupTimer = this.setupTimer.bind(this); //setup interval timer
        this.destroyTimer = this.destroyTimer.bind(this); //clears interval timer
        
        this.update = this.update.bind(this); //updates the distorted text
        this.getDistortions = this.getDistortions.bind(this); //returns array of distorted characters
        this.getRand = this.getRand.bind(this); //returns a random number between a min/max range
    }

    componentDidMount() {
        this.setupDistortions();

        setTimeout(() => {
            this.setupTimer();
        }, this.delay);
    }

    componentWillUnmount() {
        this.destroyTimer();
    }

    setupDistortions() {
        Array.from(this.props.setup.target).forEach(letter => {
            this.target.push({
                final: letter,
                distortionsRemaining: this.getDistortions()
            });
        });
    }

    setupTimer() {
        this.timerId = setInterval(() => {
            this.update(); //updates text
        }, this.pauseBetweenDistortion);
    }

    destroyTimer() {
        clearInterval( this.timerId );
    }

    update() {
        let distortedOutput = ''; //updated text displayed
        let finalCharsUnset = 0; //number of final characters that haven't been set yet (still displaying distortion)

        this.target.forEach(letter => {
            if (letter.distortionsRemaining.length > 0) { //more distortion characters to use
                finalCharsUnset++; //another final character not set

                if ( this.effect === 'spaced-out' ) {
                    distortedOutput += (letter.distortionsRemaining.pop() + ' ');
                }

                else {
                    distortedOutput += letter.distortionsRemaining.pop();
                }
            }

            else { //no more distortion characters to display
                distortedOutput += letter.final;
            }
        });

        if ( finalCharsUnset === 0 ) { //all final characters have been set
            this.destroyTimer(); //removes update timer
        }

        this.setState({ text: distortedOutput });
    }

    getDistortions() {
        let numOfDistortions = this.getRand( this.minDistortion, this.maxDistortion ); //number of distortions for this character
        let distortions = []; //selected distortions for this character
        
        for(let i = 0; i < numOfDistortions; i++) { 
            distortions.push( this.distortionList[ this.getRand(0, this.distortionList.length) ] );
        }

        return distortions;
    }

    getRand(min, max) {
        return Math.floor( Math.random() * (max - min) ) + min;
    }

    render() {
        return (
            <span className='distort-text-container'>
                {this.state.text}
            </span>
        );
    }
}

export default DistortText;