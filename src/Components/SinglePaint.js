import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchColors} from '../redux/animationActions'
import {fetchCurrentUser, postJoin} from '../redux/userActions'



class SinglePaint extends Component {

    state = {
        paintsSeen: [0],
        currentPaint: Math.floor(Math.random()*this.props.paintings.length),
        moreInfo: false
    }

    componentDidMount() {
        localStorage.getItem('token') && this.props.dispatch(fetchCurrentUser(localStorage.getItem('token')))
    }
  
    clickHandler = () => {
        let img = this.props.paintings[this.state.currentPaint]
        this.props.dispatch(fetchColors(img.id))
        this.props.dispatch(postJoin(this.props.user.id, img.id))
        this.props.history.push('/animation')
    }

    infoClickHandler = () => {
        this.setState({
            moreInfo: !this.state.moreInfo
        })
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
        let attr = img.attributes
        let hasAttr = () => { if(attr.title || attr.description || attr.artist){
                                return true
                                } return false
                            }
        console.log(hasAttr())
        let url = img.attributes["img-url"]
    return (
        <div className="section">
            <img onClick={this.clickHandler} className="single-paint" data-id={img.id} src={url} alt="Painting"/>
            {this.state.moreInfo && 
            <div>
                <h3>{attr.title && attr.title}</h3>
                <h4>{attr.artist && attr.artist}</h4>
                <p>{attr.description && attr.description}</p>
                <p>{!hasAttr() && `No information available for this artwork, try right clicking and select 'Search Google for Image'`}</p>
            </div>
            }
            <div className="horiz-flex">
                <button onClick={() => this.randomNum(this.props.paintings)} className="med-button" id="anotha">Another One</button>
                <button onClick={this.infoClickHandler} className="med-button" id="anotha">{this.state.moreInfo ? "Hide Info": "Artwork Info"}</button>
            </div>
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