import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {fetchCurrentUser} from '../redux/userActions'

class TimelineCont extends Component {

    componentDidMount(){
        this.props.dispatch(fetchCurrentUser(localStorage.getItem('token')))
    }

    render() {
        if(this.props.user) {
            const paintings = this.props.user.paintings
            console.log(paintings)
        return (
            <div>
                <p>it's timeline bb</p>
            </div>
        );
        } else {
            return <p className="error">Unauthorized: Login or Sign Up to view a timeline</p>
        }
    }
}


const mapStateToProps = state => ({
    user: state.users.currentUser
})

const connectedTimelineCont = connect(mapStateToProps)(TimelineCont)
const routedTimeLineCont = withRouter(connectedTimelineCont)

export default routedTimeLineCont;
