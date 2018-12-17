import React, { Component } from 'react';
import './App.css';
import PaintingSelect from './Components/PaintingSelect'
import Animation from './Components/Animation'
import {connect} from 'react-redux'

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>MOOD INDIGO</h1>
        {this.props.colors.length === 0 ? 
        <PaintingSelect />:
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
