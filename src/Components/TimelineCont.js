import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import {fetchCurrentUser} from '../redux/userActions'
import HorizontalTimeline from 'react-horizontal-timeline'

class TimelineCont extends Component {

    state = { 
        value: 0, 
        previous: 0 
    }

    handleTimelineClick = (index) => {
        this.setState({ 
            value: index, 
            previous: this.state.value 
        }, console.log(this.state))
    }

    componentDidMount(){
        this.props.dispatch(fetchCurrentUser(localStorage.getItem('token')))
    }

    render() {
        if(this.props.user) {
            const paintings = this.props.user.paintings
            console.log(paintings)
        return (
            <div>
                {/* Bounding box for the Timeline */}
                <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
                <HorizontalTimeline
                    index={this.state.value}
                    indexClick={(e, index) => this.handleTimelineClick(e, index)}
                    values={ ['2018-01-05'] } 
                    styles={{background:'transparent', foreground:'#4e14f2', outline:'#dfdfdf'}}/>
                </div>
                <div className='text-center'>
                {/* any arbitrary component can go here */}    
                {this.state.value}
                </div>
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
