import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Profile extends Component {


    render(){
        if(localStorage.getItem('user')) {
            return(
                <p>it's profile baby</p>
            )
        } else {
            return(
                <p>you don't have access 2 this... sign up 4 ur colors smh</p>
            )
        }
    }

}

export default withRouter(Profile)
