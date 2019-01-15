import React, { Component } from 'react';
import PaintingSelect from './PaintingSelect'
import {withRouter} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'


class Landing extends Component {

    state = {
        logStatus: true,
        translate1: (Math.floor(Math.random()*35))-10,
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

    goToSignUp = () => {
        this.props.history.push('./signup')
    }

    goToLogIn = () => {
        this.props.history.push('./login')
    }

    signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({
            logStatus: !this.state.logStatus
        }, () => window.alert("Logged out!"))

    }

    goToProfile = () => {
        this.props.history.push('/profile')
    }

    render() {
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
            box-shadow: 0px 0px 100px 40px cyan, 
                        inset 0 0 40px 10px whitesmoke;
            z-index: -1;
        `
        let HaloRingTwo = styled.div`
            position: absolute;
            animation: ${moveTwo} 20s infinite linear;
            width: 10em;
            height: 10em;
            border-radius: 50%;
            box-shadow: 0px 0px 100px 40px rgb(234, 0, 255), 
                        inset 0 0 40px 10px rgb(32, 32, 32);
            z-index: -1;
        `
        return (
            <div className="section">

                {localStorage.getItem('token') ? 
                <div className="top-nav">
                    <button onClick={this.goToProfile} className="med-button">Profile</button>
                    <button onClick={this.signOut} className="med-button">Log Out</button>
                </div>:
                <div className="top-nav">
                    <button onClick={this.goToSignUp} className="med-button">Sign Up</button>
                    <button onClick={this.goToLogIn} className="med-button">Log In</button>
                </div>
                }
                <HaloRing></HaloRing>
                <HaloRingTwo></HaloRingTwo>
                <h1 className="fade-in">MOOD INDIGO</h1>
                <h3 className="header fade-in slower" id="subtitle">abstractly visualize your vibe</h3>
                <hr></hr>
                <PaintingSelect />
            </div>
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }
}


export default withRouter(Landing)


