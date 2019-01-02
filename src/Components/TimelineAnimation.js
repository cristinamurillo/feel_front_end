import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components'


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
        const painting = this.props.painting.painting
        let changeRingColor = keyframes`
        0% {
            box-shadow: 0px 0px 100px 50px ${painting.color1}, inset 0 0 60px 20px ${painting.color6};
        } 50% {
            box-shadow: 0px 0px 100px 50px ${painting.color6}, inset 0 0 60px 20px ${painting.color4};
        } 100% {
            box-shadow: 0px 0px 100px 50px ${painting.color1}, inset 0 0 60px 20px ${painting.color6};
        }
    `
    let HaloRing = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        animation: ${changeRingColor} 15s ease infinite;
        box-shadow: 0px 0px 100px 50px ${painting.color1}, 
                    inset 0 0 60px 20px ${painting.color6};
    `;

    let InnerCircle = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    transform-style: preserve-3d;
    border-radius: 100%;
    box-sizing: border-box;
   
    box-shadow: 0px 5px 70px 10px ${painting.color2}, 
                inset 0 0 40px ${painting.color3};

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
        background: linear-gradient(270deg, #ccc, #babec1, #222222);
        background-size: 600% 600%;
        animation: gradientShift 30s ease infinite`;
      }
}

export default TimelineAnimation;
