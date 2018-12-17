import React, {Component} from 'react'
import {connect} from 'react-redux'


class Animation extends Component {
    
  render(){
      console.log(this.props)
      return(
        <p>animation baby!</p>
      )
  }


}

const mapStateToProps = state => ({
    colors: state.animations.colors
})

export default connect(mapStateToProps)(Animation);