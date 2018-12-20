import React, { Component } from 'react';
import PaintingSelect from './PaintingSelect'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Landing extends Component {

    // componentDidMount(){
    //     axios.post('http://localhost:3000/api/v1/users', {first_name: "chris", password: "chris"})
    //         .then(response => {
    //             console.log("created user...")
    //             console.log(response)
    //         })
    //         .catch(response => console.log(response))
    // }
    goToSignUp = () => {
        this.props.history.push('./signup')
    }

    goToLogIn = () => {
        this.props.history.push('./login')
    }

    render() {
        return (
            <div className="section">
                <button onClick={this.goToSignUp} className="med-button">Sign Up</button>
                <button onClick={this.goToLogIn} className="med-button">Log In</button>
                <h1 className="fade-in">MOOD INDIGO</h1>
                <h3 className="header fade-in slower" id="subtitle">abstractly visualize your vibe</h3>
                <hr></hr>
                <PaintingSelect />
            </div>
        );
    }
}


export default withRouter(Landing)