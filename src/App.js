import React, { Component } from 'react';

import './App.css';

import CountdownTimer from './components/CountdownTimer/CountdownTimer';

class App extends Component {

  render() {
    return (
      <div>
        <h1 className="header">Countdown Timer</h1>
        <CountdownTimer/>
      </div>
    );
  }
}

export default App;
