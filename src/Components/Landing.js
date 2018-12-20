import React, { Component } from 'react';
import PaintingSelect from './PaintingSelect'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {

    state = {
        logStatus: true
    }

    goToSignUp = () => {
        this.props.history.push('./signup')
    }

    goToLogIn = () => {
        this.props.history.push('./login')
    }

    signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({
            logStatus: !this.state.logStatus
        })
    }

    render() {
        return (
            <div className="section">
                {localStorage.getItem('token') ? 
                <div className="top-nav">
                    <button onClick={this.signOut} className="med-button">Profile</button>
                    <button onClick={this.signOut} className="med-button">Log Out</button>
                </div>:
                <div className="top-nav">
                    <button onClick={this.goToSignUp} className="med-button">Sign Up</button>
                    <button onClick={this.goToLogIn} className="med-button">Log In</button>
                </div>
                }
                <h1 className="fade-in">MOOD INDIGO</h1>
                <h3 className="header fade-in slower" id="subtitle">abstractly visualize your vibe</h3>
                <hr></hr>
                <PaintingSelect />
            </div>
        );
    }
}


export default withRouter(Landing)