import React, { Component } from 'react';
import './App.css';
import Animation from './Components/Animation'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Landing from './Components/Landing'


class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path ="/animation" component={Animation}/>
        </Switch>
          
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  colors: state.animations.colors
})


export default connect(mapStateToProps)(App);
