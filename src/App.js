import React, { Component } from 'react';
import Students from './students/Students';
import Professors from './professors/Professors';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Students />
        <hr />
        <Professors />
      </div>
    );
  }
}

export default App;
