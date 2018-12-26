import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Profile extends Component {

    state = {
        user: {}
    }

    goToTimeline = () => {
        this.props.history.push('/timeline')
    }

    goBack = () => {
        this.props.history.replace('/')
    }


    componentDidMount(){
        axios.get('http://localhost:3000/api/v1/profile', {
            headers: {'Authorization': `Bearer: ${localStorage.getItem('token')}`}
        }).then(response => {
            this.setState({
                user: response.data.user 
            })
        })
    }

    render(){
        if(localStorage.getItem('token')) {
            const { user } = this.state 
            return(
                <div>
                    {/* <button onClick={this.goBack} type ="button" className="med-button back-button">
                        Back to Home
                    </button> */}
                    <div className="section fade-in" id="prof-upper">
                        <h2 className="spaced">Welcome {user.first_name}</h2>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <button onClick={this.goToTimeline} className="large-button">Timeline</button>
                        <button className="large-button">Artworks</button>
                    </div>
                </div>
            )
        } else {
            return(
                <p>you don't have access 2 this... sign up 4 ur colors smh</p>
            )
        }
    }

}

export default withRouter(Profile)
