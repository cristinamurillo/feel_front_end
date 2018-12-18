import React, { Component } from 'react';
import './App.css';
import PaintingSelect from './Components/PaintingSelect'
import Animation from './Components/Animation'
import {connect} from 'react-redux'
import video from './fog.mp4'

class App extends Component {
  render() {

    return (
      <div className="App">
      {/* <video autoPlay muted loop id="backVid">
        <source src={video} type="video/mp4"/>
      </video> */}
        {this.props.colors.length === 0 ? 
        <div>
        <h1 className="fade-in">MOOD INDIGO</h1>
        <PaintingSelect /></div>:
        <div className="fade-in">
        <Animation/>
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.animations.colors
})


export default connect(mapStateToProps)(App);
