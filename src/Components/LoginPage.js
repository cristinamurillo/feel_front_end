import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class LoginPage extends Component {

    render(){
        return(
            <p>it's login baby</p>
        )
    }

}

export default withRouter(LoginPage)