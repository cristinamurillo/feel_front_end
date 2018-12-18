import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import {fetchColors} from '../redux/animationActions'


class SinglePaint extends Component {

  
    clickHandler = () => {
        this.props.dispatch(fetchColors(this.props.img.id))
        console.log(this.props)
        this.props.history.push('/animation')

        
    }
   
    render() {
        let url = this.props.img.attributes["img-url"]
    return (
       
        <div className="section">
            <img onClick={this.clickHandler} className="single-paint" data-reactid={this.props.img.id} src={url} alt="Painting"/>
        </div>
    );
    }
}

const mapStateToProps = state => ({
    colors: state.animations.colors,
    loading: state.animations.loading
})

const connectedContainer = connect(mapStateToProps)(SinglePaint)
const RoutedContainer = withRouter(connectedContainer)

export default RoutedContainer