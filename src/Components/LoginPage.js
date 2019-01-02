import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        invalid: false 
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
        axios.post('http://localhost:3000/api/v1/login', this.state)
            .then(response => {
                localStorage.setItem('token', response.data.jwt)
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
            <React.Fragment>
                <button onClick={this.goBack} type ="button" className="med-button back-button">
                Back to Home
                </button>
                <div className="section">
                    <h2>Login</h2>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.changeHandler}/>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                        <input type= "submit" value="Submit"/>
                    </form>
                    {this.state.invalid && <p className="error">Invalid e-mail or password</p>}
                </div>
            </React.Fragment>
        )
    }

}

export default withRouter(LoginPage)