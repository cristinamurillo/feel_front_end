import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        invalid: false 
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted")
        axios.post('http://localhost:3000/api/v1/login', this.state)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.jwt)
                // localStorage.setItem('user', response.data.user.id)
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({
                    invalid: true
                })
            })
    }

    
    render(){
        return(
            <div className="section">
                <h3>Login</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.changeHandler}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    <input type= "submit" value="Submit"/>
                </form>
                {this.state.invalid && <p className="error">Invalid e-mail or password</p>}
            </div>
        )
    }

}

export default withRouter(LoginPage)