import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Profile extends Component {


    componentDidMount(){
        axios.get('http://localhost:3000/api/v1/users', {
            headers: {'Authorization': `Bearer: ${localStorage.getItem('token')}`}
        }).then(response => {
            console.log(response)
        })
    }

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
