import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchColors} from '../redux/animationActions'
import {fetchCurrentUser, postJoin} from '../redux/userActions'


class PaintList extends Component {

    componentDidMount() {
         localStorage.getItem('token') && this.props.dispatch(fetchCurrentUser(localStorage.getItem('token')))
    }

    clickHandler = (event) => {
        let imgId =event.target.dataset.id
        this.props.dispatch(fetchColors(imgId))
        this.props.dispatch(postJoin(this.props.user.id, imgId))
        this.props.history.push('/animation')
    }

    render(){
        let paintings = this.props.paintings
            return (
                <div className="paint-list fade-in">
                     {paintings.map(painting => {
                         return <img onClick={this.clickHandler} data-id={painting.id} className="listed-paint" src={painting.attributes["img-url"]} alt="Painting"/>
                     })}       
                </div>
            )
       
    }
}

const mapStateToProps = state =>({
    paintings: state.paintings.paintings,
    user: state.users.currentUser 
})

const connectedPaintList = connect(mapStateToProps)(PaintList)
const routedPaintList = withRouter(connectedPaintList) 

export default routedPaintList