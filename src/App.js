import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
      </div>
    );
  }
}

export default App;
