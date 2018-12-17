import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'


class Animation extends Component {

  render(){
      let HaloRing = styled.div`
        width: 200px;
        height: 200px;
        border-radius: 50%;
        box-shadow: 0px 0px 60px 20px blue, inset 0 0 1px 1px teal;
      `;

    let InnerCircle = styled.div`
      width: 100px;
      height: 100px;
      position: absolute;
      transform-style: preserve-3d;
      border-radius: 100%;
      box-sizing: border-box;
      box-shadow: 0px 5px 70px 10px cyan, inset 0 0 40px white;

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
        box-shadow: 0 0 100px 4px white;
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
        box-shadow: 0 0 100px 4px black;
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
        <div>
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