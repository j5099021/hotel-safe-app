import React, { Component } from 'react'
import Keypad from './Keypad'
import Key from './Key'
import LCDScreen from './LCDScreen'
import LockIndicator from './LockIndicator'
import { createStore } from 'redux'

import './scss/keypad.scss'

class App extends Component {

  constructor(props) {
    super(props)
    this.keysArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLR', '0', '⇨']
    this.pinDigits = 4
    this.state = {
            currentInput: '',
            isLocked: false,
            pin: ''
        }
    this.buttonClick = this.buttonClick.bind(this)
  }

  invalidMsg= 'INVALID'

  buttonClick(e){
    if(e.target.value=='CLR'){
      this.setState({ currentInput: '' });
    }else if(e.target.value=='⇨'){
      if(this.state.currentInput.length==this.pinDigits && this.state.pin!=''){
        if(this.state.pin==this.state.currentInput){
          this.setState((state) => ({ pin: '', isLocked: false }));
        }else{
          this.setState((state) => ({ currentInput: this.invalidMsg }));
        }
      } else if(this.state.currentInput.length==this.pinDigits && this.state.pin==''){
        this.setState((state) => ({ pin: this.state.currentInput, currentInput: '', isLocked: true }));
      }else{
        this.setState((state) => ({ currentInput: this.invalidMsg }));
      }
    }else{
      let newInput = this.state.currentInput;
      if(this.state.currentInput==this.invalidMsg ){
        newInput = '';
      }
      if(newInput.length<this.pinDigits){
        newInput = newInput + e.target.value;
        this.setState((state) => ({ currentInput: newInput }));
      }
    }     
  }


  /*
    The hotel safe has a key pad that you can press to enter up to 4 numbers at a time.
    Users should be able to store a 4 digit PIN code and indicate via the LockIndicator that the safe is locked.
    Trying to set a PIN number that is not 4 digits (set by clicking the enter key '⇨') will display an 'INAVLID' error message.
    Once Locked users should be able to key in the stored 4 digit PIN click enter and the safe will unlocked.
    Invalid PIN numbers show should the message 'INVALID' on the LCDScreen.

    All of the components needed for the application already exist and are setup ready for the logic and event handlers to be created

    Some CSS is provided but some styling will be needed to complete the app.

    run 'npm install' before running 'npm start'
  */

  render() {
    return (
      <div className="hotelSafe">
        <div className="column--half">
          <Keypad>{
            this.keysArr.map(val => (
              <Key
                key={val}
                value={val}
                onClick={this.buttonClick}
              />
            ))
          }</Keypad>
        </div>
        <div className="column--half flex--column">
          <LCDScreen outputText={this.state.currentInput} />
          <LockIndicator isLocked={this.state.isLocked} />
        </div>
      </div>
    )
  }
}

export default App
