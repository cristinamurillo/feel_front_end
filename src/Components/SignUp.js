import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class SignUp extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    render(){
        return(
            <div className="section">
                <p>it's signup baby</p>
                <form onSubmit={this.submitHandler}>
                <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.changeHandler}/>
                <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/>
                <input type= "submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default withRouter(SignUp)