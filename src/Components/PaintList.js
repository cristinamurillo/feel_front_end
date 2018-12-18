import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchColors} from '../redux/animationActions'


class PaintList extends Component {

    clickHandler = (event) => {
        this.props.dispatch(fetchColors(event.target.dataset.id))
        this.props.history.push('/animation')
    }

    render(){
        let paintings = this.props.paintings
        console.log(paintings[0])
            return (
                <div className="paint-list">
                     {paintings.map(painting => {
                         return <img onClick={this.clickHandler} data-id={painting.id} className="listed-paint" src={painting.attributes["img-url"]} alt="Painting"/>
                     })}       
                </div>
            )
       
    }
}

const mapStateToProps = state =>({
    paintings: state.paintings.paintings 
})

const connectedPaintList = connect(mapStateToProps)(PaintList)
const routedPaintList = withRouter(connectedPaintList) 

export default routedPaintList