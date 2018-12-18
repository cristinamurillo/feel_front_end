import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'


class Animation extends Component {

    goBack = () => {
        console.log("go back")
    }

  render(){
      let colors = this.props.colors 
      console.log("hi")
      console.log(colors)
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
        <div className ="animation-full">
        <button onClick ={this.goBack} className="med-button back-button">Back to Home</button>
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

const mapStateToProps = state => ({
    colors: state.animations.colors
})

export default connect(mapStateToProps)(Animation);