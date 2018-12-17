import React, { Component } from 'react';
import './App.css';
import PaintingSelect from './Components/PaintingSelect'
import Animation from './Components/Animation'
import {connect} from 'react-redux'

class App extends Component {
  render() {

    return (
      <div className="App">
        {this.props.colors.length === 0 ? 
        <div>
        <h1>MOOD INDIGO</h1>
        <PaintingSelect /></div>:
        <Animation />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.animations.colors
})


export default connect(mapStateToProps)(App);
