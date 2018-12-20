import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class LoginPage extends Component {

    state = {
        email: "",
        password: "" 
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log("submitted")
        console.log(this.state)
        axios.post('http://localhost:3000/api/v1/login', this.state)
            .then(response => {
                localStorage.setItem('token', response.data.jwt)
                localStorage.setItem('user', response.data.user.id)
                this.props.history.push('/')
            })
    }

    
    render(){
        return(
            <div className="section">
                <p>it's login baby</p>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.changeHandler}/>
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/>
                    <input type= "submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default withRouter(LoginPage)