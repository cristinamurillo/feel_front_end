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
    
    goBack = () => {
        this.props.history.replace('/')
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
                return null 
            })
        }
        axios.post('http://localhost:3000/api/v1/users', this.state)
            .then(response => {
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
            <React.Fragment>
                <button onClick={this.goBack} type ="button" className="med-button back-button">
                Back to Home
                </button>
                <div className="section">
                    <h2>Sign Up</h2>
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
            </React.Fragment>
        )
    }

}

export default withRouter(SignUp)