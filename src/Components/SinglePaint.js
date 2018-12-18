import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchColors} from '../redux/animationActions'


class SinglePaint extends Component {

  
    clickHandler = () => {
        this.props.dispatch(fetchColors(this.props.img.id))
        console.log(this.props)
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

export default connect(mapStateToProps)(SinglePaint);