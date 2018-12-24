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

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log("sign up sent")
        axios.post('http://localhost:3000/api/v1/users', this.state)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.jwt)
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <div className="section">
                <h3>Sign Up</h3>
                <form onSubmit={this.submitHandler} id="signup">
                    <input type="text" name="first_name" placeholder="First name" value={this.state.first_name} onChange={this.changeHandler}/>
                    <input type="text" name="last_name" placeholder="Last name" value={this.state.last_name} onChange={this.changeHandler}/>
                    <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/>
                    <input type="password" name="confirm_password" placeholder="Confirm password" value={this.state.confirm_password} onChange={this.changeHandler}/>
                    <input type= "submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default withRouter(SignUp)