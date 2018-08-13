import React, {Component} from 'react';
import './style/autoText.css';

class AutoText extends Component {
    constructor(props) {
        super(props);

        this.staticText = this.props.setup.staticText; //unchanging text (immediately renders)
        this.dynamicStrings = this.props.setup.dynamicStrings; //all strings that are cycled as output
        this.dynamicIndex = 0; //index of current dynamic string being displayed

        this.duration = this.props.setup.duration; //number of miliseconds it pauses before updating the output
        this.loop = this.props.setup.loop; //determines if the text reverses after being fully output
        this.playDirection = 'FORWARD'; //determines which direction to animate - only changes if 'loop' is true

        this.dramaticPause = false; //set to TRUE once the forward update finishes until the backward update beings(if loop is TRUE)
        this.dramaticPauseDuration = 800; //duration to pause before starting the backward update(if loop is TRUE) in miliseconds

        this.state = {
            dynamicText: '' //
        };

        this.update = this.update.bind(this);
        this.updateForward = this.updateForward.bind(this); //updates the text by adding characters
        this.updateBackward = this.updateBackward.bind(this); //updates the text by removing characters

        this.updateDynamicIndex = this.updateDynamicIndex.bind(this); //updates the dynamic index to display a new dynamic string
    }

    componentDidMount() {
        this.timerID = setInterval(this.update, this.duration);
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
               if ( this.loop ) { 
                   if ( !this.dramaticPause ) {
                       this.dramaticPause = true;

                       setTimeout(() => {
                           this.playDirection = 'BACKWARD';
                           this.dramaticPause = false;
                       }, this.dramaticPauseDuration);
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
                {`${this.staticText}${this.state.dynamicText}`}
                <span className='auto-text-cursor'>|</span>
            </span>
        );
    }
}

export default AutoText;