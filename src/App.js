import React, { Component } from 'react';
import './App.css';
import PaintingSelect from './Components/PaintingSelect'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MOOD INDIGO</h1>
        <PaintingSelect />
      </div>
    );
  }
}

export default App;
