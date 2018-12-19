import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {withRouter} from 'react-router-dom'
import smoke from '../smoke.jpg'

class Animation extends Component {

    goBack = () => {
        this.props.history.replace('/')
    }

  render(){
    document.body.style =`
    background: whitesmoke;
    `
 
      if(this.props.loading === true){
          return <div><p className="centered">Extracting colors</p></div>
      } else if(this.props.error) {
          return (
            <div>
                <button onClick={this.goBack} type ="button" className="med-button back-button">
                Back to Home
                </button>
                <div>Image invalid for color analysis, please try a different URL </div> 
            </div>
          ) 
      } else {
        let colors = this.props.colors 

        let HaloRing = styled.div`
            width: 200px;
            height: 200px;
            border-radius: 50%;
            box-shadow: 0px 0px 100px 50px rgb(${colors[0][0]},${colors[0][1]},${colors[0][2]}), 
                        inset 0 0 60px 20px rgb(${colors[7][0]},${colors[7][1]},${colors[7][2]});
        `;

        let InnerCircle = styled.div`
        width: 100px;
        height: 100px;
        position: absolute;
        transform-style: preserve-3d;
        border-radius: 100%;
        box-sizing: border-box;
        box-shadow: 0px 5px 70px 10px rgb(${colors[2][0]},${colors[2][1]},${colors[2][2]}), 
                    inset 0 0 40px rgb(${colors[3][0]},${colors[3][1]},${colors[3][2]});

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
            background: rgba(${colors[5][0]},${colors[5][1]},${colors[5][2]}, 0.4)
            box-shadow: 0 0 100px 10px rgb(${colors[5][0]},${colors[5][1]},${colors[5][2]});
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
            background: rgba(${colors[4][0]},${colors[4][1]},${colors[4][2]}, 0.4)
            box-shadow: 0 0 100px 10px rgb(${colors[4][0]},${colors[4][1]},${colors[4][2]});
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



        return(
            <div className ="animation-full fade-in">
                <button onClick={this.goBack} type ="button" className="med-button back-button">
                Back to Home
                </button>
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

        )
    }

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



const mapStateToProps = state => ({
    colors: state.animations.colors,
    loading: state.animations.loading,
    error: state.animations.error 
})

const connectedAnimation = connect(mapStateToProps)(Animation)
const routedAnimation = withRouter(connectedAnimation)

export default routedAnimation;