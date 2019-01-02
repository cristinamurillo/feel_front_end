import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import axios from 'axios'

class LoginPage extends Component {

    state = {
        email: "",
        password: "",
        invalid: false,
        ranslate1: (Math.floor(Math.random()*35))-10,
        translate2: Math.floor(Math.random()*35),
        translate3: Math.floor(Math.random()*30)-10 
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ 
                translate1: (Math.floor(Math.random()*35))-10,
                translate2: Math.floor(Math.random()*35),
                translate3: Math.floor(Math.random()*30)-10
            })}, 20000);          
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

        let moveOne = keyframes`
            0% {
                transform: translateX(-10em) translateY(5em)
            } 50% {
                transform: translateX(40em) translateY(${this.state.translate1}em)
            } 100% {
                transform: translateX(70em) translateY(-20em)
            }
        `
        let moveTwo = keyframes`
            0% {
                transform: translateX(90em) translateY(20em)
            } 33% {
                transform: translateX(58em) translateY(${this.state.translate2}em)
            } 66% {
                transform: translateX(20em) translateY(${this.state.translate3}em)
            } 100% {
                transform: translateX(-10em) translateY(10em)
            }
        `
        let HaloRing = styled.div`
            position: absolute;
            animation: ${moveOne} 20s infinite linear;
            width: 10em;
            height: 10em;
            border-radius: 50%;
            box-shadow: 0px 0px 100px 40px #222, inset 0 0 40px 10px gray;
            z-index: -1;
        `
        let HaloRingTwo = styled.div`
            position: absolute;
            animation: ${moveTwo} 20s infinite linear;
            width: 10em;
            height: 10em;
            border-radius: 50%;
            box-shadow: 0px 0px 100px 40px darkcyan, inset 0 0 40px 10px #222;
            z-index: -1;
        `

        return(
            <React.Fragment>
                <HaloRing></HaloRing>
                <HaloRingTwo></HaloRingTwo>
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