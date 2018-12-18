import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchColors} from '../redux/animationActions'


class SinglePaint extends Component {

    state = {
        paintsSeen: [0],
        currentPaint: 0
    }
  
    clickHandler = () => {
        this.props.dispatch(fetchColors(this.props.img.id))
        this.props.history.push('/animation')
    }

    randomNum = (array) => {
        let index = 0
        while(this.state.paintsSeen.includes(index)) {
            index = Math.floor(Math.random()*array.length)
        }
        
        this.setState({
            paintsSeen: [...this.state.paintsSeen, index],
            currentPaint: index 
        })
    
        return index 
    }
   
    render() {
        console.log(this.props)
        let img = this.props.paintings[this.state.currentPaint]
        let url = img.attributes["img-url"]
    return (
        <div className="section">
            <img onClick={this.clickHandler} className="single-paint" data-reactid={img.id} src={url} alt="Painting"/>
            <button onClick={() => this.randomNum(this.props.paintings)} className="med-button" id="anotha">Another One</button>
        </div>
    );
    }
}

const mapStateToProps = state => ({
    paintings: state.paintings.paintings
})

const connectedContainer = connect(mapStateToProps)(SinglePaint)
const routedContainer = withRouter(connectedContainer)

export default routedContainer