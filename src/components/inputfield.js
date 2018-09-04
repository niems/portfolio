import React, {Component} from 'react';
import {ThemeContext, themes} from '../theme-context';
import './style/inputfield.css';

function DisplayEmoji({ onEmoji }) {
    return (
        <button className='button emoji-btn' type='button' onClick={onEmoji}>
            <img className='img emoji-img' src='./images/emoji-black.svg' alt='send arrow button failed to load' />            
        </button>
    );
}

/*Plain inputfield. Does not include send button or emojibar */
function DisplayInputfield({ value, onChange }) {
    return (
        <input className='_inputfield' type='text' value={value} onChange={onChange} placeholder='Enter info here...' required autoComplete='false' autoFocus />
    );
}

function DisplaySubmit(props) {
    return (
        <button className='button submit-btn' type='submit'>
            <img className='img submit-img' src='./images/send-button-black.svg' alt='send arrow button failed to load' />
        </button>
    )
}

function Emoji_Inputfield_Submit({ value, onChange, onEmoji }) {
    return (
        <React.Fragment>
            <DisplayEmoji onEmoji={onEmoji} />
            <DisplayInputfield value={value} onChange={onChange} />
            <DisplaySubmit />
        </React.Fragment>
    );
}

/*Plain inputfield with submit button */
function Inputfield_Submit({ value, onChange }) {
    return (
        <React.Fragment>
            <DisplayInputfield value={value} onChange={onChange} />
            <DisplaySubmit />
        </React.Fragment>
    );
}

/*Selects the inputfield type to be displayed*/
function InputTypeSelect({ inputType, value, onChange, onEmoji}) {
    let inputDisplayed = null;

    switch(inputType) {
        case 'text':
            inputDisplayed = (<DisplayInputfield value={value} onChange={onChange} />);
            break;

        case 'submit-only':
            inputDisplayed = (<Inputfield_Submit value={value} onChange={onChange} />);
            break;

        case 'emoji-and-submit':
            inputDisplayed = (<Emoji_Inputfield_Submit value={value} onChange={onChange} onEmoji={onEmoji} />);
            break;

        default:
            console.log(`inputTypeSelect() type "${inputType}" not defined`);
            break;
    }

    return inputDisplayed;
}

class Inputfield extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this); //input value changed
        this.onSubmit = this.onSubmit.bind(this); //user submitted input
        this.onEmoji = this.onEmoji.bind(this); //user clicked emoji button
    }

    onChange(e) {
        e.preventDefault();

        this.setState({
            value: e.currentTarget.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`onSubmit() submitting "${this.state.value}" \n`);
            
        //callback here
    
        this.setState({ value: '' }); //reset state
        
    }

    onEmoji(e) {
        e.preventDefault();
        console.log('onEmoji()');

        //toggle emoji display here (may need to keep this in state)
    }

    

    render() {
        return (
            <React.Fragment>
                <form className='inputfield-form-container' onSubmit={this.onSubmit}>
                    <InputTypeSelect inputType={this.props.inputType} value={this.state.value} 
                                    onChange={this.onChange} onEmoji={this.onEmoji} />
                </form>
                
                <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <button type='button' className={`theme-button ${theme}`}  onClick={toggleTheme}>toggle theme</button>
                )}
                </ThemeContext.Consumer>
            </React.Fragment>
        );
    }
}

export default Inputfield;