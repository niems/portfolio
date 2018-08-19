import React, {Component} from 'react';
import './style/autoText.css';

function ToList({ classList, sentence }) {
    const arr = Array.from(sentence);

    console.log(`sentence: ${arr}\n`);
    const items = Array.from(sentence).map(char => (
        char == ' ' ? (<span className={classList}>&#8195;</span>)
                    : (<span className={classList}>{`${char}`}</span>)
    ));

    return items;
}

function TextEffects({ effect, staticText, dynamicText }) {
    let output = '';
    switch(effect) {
        case 'spring':
        case 'stand-up':
            output = (<ToList classList={`auto-text ${effect}`} sentence={`${staticText}${dynamicText}`} />);
            break;
        
        default:
            output = `${staticText}${dynamicText}`;
            break;
    }

    return output;
}

class AutoText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dynamicText: '' //
        };
       
        this.loop = this.props.setup.loop === undefined ? false : this.props.setup.loop; //determines if the text reverses after being fully output
        this.effect = this.props.setup.effect;
        //this.springEffect = this.props.setup.springEffect === undefined ? false : this.props.setup.springEffect; //if true, letters spring when hovered over

        
        this.dynamicIndex = 0; //index of current dynamic string being displayed
        this.staticText = this.props.setup.staticText === undefined ? '' : this.props.setup.staticText; //unchanging text (immediately renders)
        this.dynamicStrings = this.props.setup.dynamicStrings === undefined ? [''] : this.props.setup.dynamicStrings; //all strings that are cycled as output
       
        this.characterDuration = this.props.setup.characterDuration === undefined ? 100 : this.props.setup.characterDuration; //number of miliseconds it pauses before updating the output
        this.sentencePauseDuration = this.props.setup.sentencePauseDuration === undefined ? 1500 : this.props.setup.sentencePauseDuration; //miliseconds to pause once the current dynamic string is output
        this.sentencePause = false; //set to TRUE once the forward update finishes until the backward update beings(if loop is TRUE)
       
        this.playDirection = 'FORWARD'; //determines which direction to animate - only changes if 'loop' is true
        

        this.update = this.update.bind(this);
        this.updateForward = this.updateForward.bind(this); //updates the text by adding characters
        this.updateBackward = this.updateBackward.bind(this); //updates the text by removing characters

        this.updateDynamicIndex = this.updateDynamicIndex.bind(this); //updates the dynamic index to display a new dynamic string
    }

    componentDidMount() {
        setTimeout(() => {
            this.timerID = setInterval(this.update, this.characterDuration);
        }, 500);
    }

    componentWillUnmount() {
        clearInterval( this.timerID );
    }

    update() {
        if ( this.playDirection === 'FORWARD' ) {
            this.updateForward();
        }

        else if ( this.playDirection === 'BACKWARD' ) {
            this.updateBackward();
        }
    }

    updateForward() {
        try {
            const dynamicStrLength = this.dynamicStrings[ this.dynamicIndex ].length;
    
            if ( this.state.dynamicText.length < dynamicStrLength ) {
                const dynamicText = this.state.dynamicText + this.dynamicStrings[ this.dynamicIndex ][ this.state.dynamicText.length ];
                this.setState({ dynamicText });
           }
    
           else {
               //if ( this.loop ) { 
                //if looping is enabled OR it hasn't finished going through all the strings.
                if ( this.loop || (this.dynamicIndex + 1) < this.dynamicStrings.length ) {
                   if ( !this.sentencePause ) {
                       this.sentencePause = true;

                       setTimeout(() => {
                           this.playDirection = 'BACKWARD';
                           this.sentencePause = false;
                       }, this.sentencePauseDuration);
                   }
               }
    
               else {
                   clearInterval( this.timerID ); //kills timer since the animation finished
               }
           }
        }
        catch(err) {
            console.log(`ERR updateForward() ${err.message}`);
            clearInterval(this.timerID);
        }
    }

    updateBackward() {
        try {
            if ( this.state.dynamicText.length > 0 ) {
                const dynamicText = this.state.dynamicText.slice(0, this.state.dynamicText.length - 2);
                this.setState({ dynamicText });
            }
    
            else {
                this.playDirection = 'FORWARD';
                this.updateDynamicIndex();
            }
        }
        catch(err) {
            console.log(`ERR updateBackward() ${err.message}`);
            clearInterval(this.timerID);
        }
    }

    updateDynamicIndex() {
        this.dynamicIndex = (this.dynamicIndex < (this.dynamicStrings.length - 1) ) 
                            ? (this.dynamicIndex + 1) : 0;
    }

    render() {
        return (
            <span className='auto-text-container'>
                <TextEffects effect={this.effect} staticText={this.staticText} dynamicText={this.state.dynamicText} />
                <span className={`auto-text-cursor ${this.effect}`}>|</span>
            </span>
        );
    }
}

export default AutoText;
/*{`${this.staticText}${this.state.dynamicText}`}*/