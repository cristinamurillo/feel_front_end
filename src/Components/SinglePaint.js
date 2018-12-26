import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchColors} from '../redux/animationActions'
import {fetchCurrentUser, postJoin} from '../redux/userActions'



class SinglePaint extends Component {

    state = {
        paintsSeen: [0],
        currentPaint: 0
    }

    componentDidMount() {
        this.props.dispatch(fetchCurrentUser(localStorage.getItem('token')))
    }
  
    clickHandler = () => {
        let img = this.props.paintings[this.state.currentPaint]
        this.props.dispatch(fetchColors(img.id))
        this.props.dispatch(postJoin(this.props.user.id, img.id))
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
        
        let img = this.props.paintings[this.state.currentPaint]
        let url = img.attributes["img-url"]
    return (
        <div className="section">
            <img onClick={this.clickHandler} className="single-paint" data-id={img.id} src={url} alt="Painting"/>
            <button onClick={() => this.randomNum(this.props.paintings)} className="med-button" id="anotha">Another One</button>
        </div>
    );
    }
}

const mapStateToProps = state => ({
    paintings: state.paintings.paintings,
    user: state.users.currentUser
})

const connectedContainer = connect(mapStateToProps)(SinglePaint)
const routedContainer = withRouter(connectedContainer)

export default routedContainer