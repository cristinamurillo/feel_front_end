import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchCurrentUser} from '../redux/userActions'
import UserPaintList from './UserPaintList';


class Profile extends Component {

    state = {
        showArt: false
    }

    goToTimeline = () => {
        this.props.history.push('/timeline')
    }

    goBack = () => {
        this.props.history.replace('/')
    }

    showArt = () => {
        this.setState({
            showArt: !this.state.showArt
        })
    }


    componentDidMount(){
        this.props.dispatch(fetchCurrentUser(localStorage.getItem('token')))
    }

    render(){
        console.log(this.props)
        if(this.props.user) {
            const user = this.props.user
            return(
                <div>
                    <button onClick={this.goBack} type ="button" className="fade-in med-button back-button light">
                        Back to Home
                    </button>
                    <div className="section fade-in" id="prof-upper">
                        <h2 className="spaced">Welcome {user.first_name}</h2>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <button onClick={this.goToTimeline} className="large-button">Timeline</button>
                        {this.state.showArt ?
                        <React.Fragment>
                            <button onClick={this.showArt}className="large-button">Hide Collection</button>
                            <UserPaintList paintings={user.paintings}/>
                        </React.Fragment>
                        :<button onClick={this.showArt}className="large-button">Show Collection</button>}
                    </div>
                </div>
            )
        } else {
            return(
                <p className="error">you don't have access 2 this... sign up 4 ur colors smh</p>
            )
        }
    }

}

const mapStateToProps = state => ({
    user: state.users.currentUser
})

const connectedProfile = connect(mapStateToProps)(Profile)
const routedProfile = withRouter(connectedProfile)

export default routedProfile
