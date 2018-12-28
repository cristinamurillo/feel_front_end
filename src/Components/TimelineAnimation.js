import React, { Component } from 'react';
import styled from 'styled-components'


class TimelineAnimation extends Component {
    render() {
        document.body.style =`
        background: linear-gradient(270deg, whitesmoke, #313131);
        margin: 0;
        padding: 0;
        `
        // let colors = this.props.colors 
        // console.log("LOOK HERE")
        // console.log(this.props)
        let HaloRing = styled.div`
            width: 200px;
            height: 200px;
            border-radius: 50%;
            box-shadow: 0px 0px 100px 50px lightblue, 
                        inset 0 0 60px 20px white;
        `;

        let InnerCircle = styled.div`
        width: 100px;
        height: 100px;
        position: absolute;
        transform-style: preserve-3d;
        border-radius: 100%;
        box-sizing: border-box;
        box-shadow: 0px 5px 70px 10px cyan, 
                    inset 0 0 40px cyan;

        ::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 10%;
            height: 10%;
            border-radius: 100%;
            box-sizing: border-box;
            background: cyan
            box-shadow: 0 0 100px 10px cyan;
            transform: translateZ(-90px);
        }

        ::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 10%;
            height: 10%;
            border-radius: 100%;
            box-sizing: border-box;
            background: white
            box-shadow: 0 0 100px 10px white;
            transform: translateZ(90px);
        }

        :nth-child(1){
            transform: rotateZ(72deg) rotateX(63.435deg);
        }

        :nth-child(2) {
            transform: rotateZ(144deg) rotateX(63.435deg);    
        }

        :nth-child(3) {
            transform: rotateZ(216deg) rotateX(63.435deg);
        }

        :nth-child(4) {
            transform: rotateZ(288deg) rotateX(63.435deg);
        }
        `;

        return (
            <div className ="animation-full fade-in">
            <div className="haloCont">
                <div className="spinner">
                    <HaloRing></HaloRing>
                </div>
            </div>

            <div className="view">
                <div className="plane main">
                    <InnerCircle></InnerCircle>
                    <InnerCircle></InnerCircle>
                    <InnerCircle></InnerCircle>
                    <InnerCircle></InnerCircle>
                </div>
            </div>
        </div>
        );
    }

    componentWillUnmount() {
        document.body.style =`
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(270deg, rgb(39, 9, 59), #babec1, #222222);
        background-size: 600% 600%;
        animation: gradientShift 30s ease infinite;`
      }
}

export default TimelineAnimation;