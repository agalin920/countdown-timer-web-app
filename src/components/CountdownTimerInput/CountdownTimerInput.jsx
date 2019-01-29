import React, { Component } from 'react';

import './CountdownTimerInput.css';

const initialState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
}

class CountdownTimerInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    handleInputChange = (e) => {
        const value = Number(e.target.value);
        const max = Number(e.target.getAttribute('max'));
        const min = Number(e.target.getAttribute('min'));

        if(value < min){
            this.setState({ [e.target.name]: min });
        }
        else if(value > max){
            this.setState({ [e.target.name]: max });
        }
        else{
            this.setState({ [e.target.name]: value });
        }
        
    }

    handleHoursChange = (e) => {
        this.setState({ hours: e.target.value });
    }

    handleMinutesChange = (e) => {
        this.setState({ minutes: e.target.value });
    }

    handleSecondsChange = (e) => {
        this.setState({ seconds: e.target.value });
    }

    handleTimerSet = () => {
        this.props.setTimer(this.state);
        this.setState(initialState);
    }

    render() {
        return (
            <div className='countdown-timer-input-container'>
                <h3>Set Timer:</h3>
                <label for="days">Days: </label>
                <input type="number" name="days" value={this.state.days} onChange={this.handleInputChange} min={0} max={365}></input>
                <br/>
                <label for="hours">Hours: </label>
                <input type="number" name="hours"  value={this.state.hours} onChange={this.handleInputChange} min={0} max={23}></input>
                <br/>
                <label for="minutes">Minutes: </label>
                <input type="number" name="minutes"  value={this.state.minutes} onChange={this.handleInputChange} min={0} max={59}></input>
                <br/>
                <label for="seconds">Seconds: </label>
                <input type="number" name="seconds"  value={this.state.seconds} onChange={this.handleInputChange} min={0} max={59}></input>
                <br/>
                <button className="set-button" onClick={this.handleTimerSet}>Set Timer</button>
            </div>
        );
    }
    }

export default CountdownTimerInput;
