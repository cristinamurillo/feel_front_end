import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class SignUp extends Component {

    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        invalid_pass: false,
        errors: {}
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

        if(this.state.confirm_password !== this.state.password) {
            return this.setState({
                invalid_pass: true
            }, () => {
                console.log("no password match")
                return null 
            })
        }
        console.log("sign up sent")
        axios.post('http://localhost:3000/api/v1/users', this.state)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.jwt)
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                }) 
            })
    }

    errors = () => {
        let errors =[]
        for(let field in this.state.errors){
            errors.push(<p className="error">{field} {this.state.errors[field]}</p>)
        }
        return errors
    }

    render(){

        return(
            <div className="section">
                <h3>Sign Up</h3>
                {this.state.invalid_pass && <p className="error">Passwords do not match</p>}
                {Object.keys(this.state.errors).length > 0 && this.errors()}
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