import React, { Component } from 'react';
import './App.css';
import Animation from './Components/Animation'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import Landing from './Components/Landing'
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp'


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Switch>
          <Route exact path ="/animation" component={Animation}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/" component={Landing}/>
        </Switch>
      </div>
    );
  }
}



export default withRouter(App);
