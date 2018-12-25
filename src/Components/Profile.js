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
                    <div className="section" id="prof-upper">
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
