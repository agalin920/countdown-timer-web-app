import React, { Component } from 'react';

import './CountdownTimer.css';

import CountdownTimerInput from '../CountdownTimerInput/CountdownTimerInput';

class CountdownTimer extends Component {
    constructor(props){
        super(props);

        this.state={
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        this.intervalFlag = false;
    }

    setTimer = (input) => {
        this.stopCountdown();
        this.setState(input);
    }

    startCountdown = () => {
        if(!this.intervalFlag){
            this.intervalHandler = setInterval(this.tick, 1000);
            this.intervalFlag = true;
        } 
    }

    stopCountdown = () => {
        clearInterval(this.intervalHandler);
        this.intervalFlag = false;
    }

    tick = () => {
        const {days, hours, minutes, seconds} = this.state;
        if(seconds > 0){
            this.setState({seconds:seconds - 1})
        }
        else if(seconds === 0 && minutes !== 0){
            this.setState({minutes: minutes - 1, seconds: 59})
        }
        else if(seconds === 0 && minutes === 0 && hours !== 0){
            this.setState({hours: hours - 1, minutes: 59, seconds: 59})
        }
        else if(seconds === 0 && minutes === 0 && hours === 0 && days !== 0){
            this.setState({days:days - 1, hours: 23, minutes: 59, seconds: 59})
        }
        else{
            return;
        }  
    }

  render() {
    return (
        <div>
            <CountdownTimerInput setTimer={this.setTimer}/>
            <div className="countdown-timer-container">
                <div className="timer-block ">
                    <div className="timer-value">{this.state.days}</div>
                    <div className="timer-label">Days</div>
                </div>
                <div className="timer-block ">
                    <div className="timer-value">{this.state.hours}</div>
                    <div className="timer-label">Hours</div>
                </div>
                <div className="timer-block ">
                    <div className="timer-value">{this.state.minutes}</div>
                    <div className="timer-label">Minutes</div>
                </div>
                <div className="timer-block ">
                    <div className="timer-value">{this.state.seconds}</div>
                    <div className="timer-label">Seconds</div>
                </div>
            </div>
            <div className="controls-container">
                <button className="start-button" onClick={this.startCountdown}>Start</button> 
                <button className="stop-button" onClick={this.stopCountdown}>Stop</button>
            </div>
        </div>
    );
  }
}

export default CountdownTimer;
