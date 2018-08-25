import React, {Component} from 'react';
import './style/distortText.css';

/*
    pass options as object under 'setup'.
    ex. this.props.setup = {
        target: '',
        delay: 500,
        etc...
    }

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

        this.fontClass = this.props.font === undefined ? '' : this.props.font; //determines font class to use
        
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
        this.singleOutputEffect = this.singleOutputEffect.bind(this); //only one character is distorted at a time, displaying a new scrambled character after the previous is unscrambled
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
        try {
            let distortedOutput = ''; //updated text displayed
            let finalCharsUnset = 0; //number of final characters that haven't been set yet (still displaying distortion)
    
            if ( this.effect === 'single-output' ) {
                let output = this.singleOutputEffect();
                distortedOutput = output.distortedOutput;
                finalCharsUnset = output.finalCharsUnset;
            }
    
            else {
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
            }
    
            this.setState({ text: distortedOutput });
        }
        catch(err) {
            this.destroyTimer();
            console.log(`err: ${err.message}\n`);
        }
    }

    singleOutputEffect() {
        let distortedOutput = Array.from(this.state.text); //updated text displayed

        //subtracting an additional unit b/c the current character isn't initially counted
        let finalCharsUnset = this.target.length - this.state.text.length - 1; //number of final characters that haven't been set yet (still displaying distortion)
        let outputLen = this.state.text.length > 0 ? this.state.text.length - 1 : 0;

        if ( this.target[ outputLen ].distortionsRemaining.length > 0 ) { //more distortions to use before unscrambled
            distortedOutput[ outputLen ] = this.target[ outputLen ].distortionsRemaining.pop();
        }

        else { //finally the character is unscrambled
            distortedOutput[ outputLen ] = this.target[ outputLen ].final;
            outputLen++; //current character counted since it's in final form

            if ( this.target.length > outputLen ) { //more characters to unscramble
                distortedOutput.push( this.target[ outputLen ].distortionsRemaining.pop() );
            }
        }

        return {distortedOutput: distortedOutput.join(''), finalCharsUnset: finalCharsUnset};
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
            <span className={`distort-text-container ${this.fontClass}`}>
                {this.state.text}
            </span>
        );
    }
}

export default DistortText;