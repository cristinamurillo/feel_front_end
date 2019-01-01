import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import HorizontalTimeline from 'react-horizontal-timeline'
import TimelineAnimation from './TimelineAnimation'
import axios from 'axios';

class TimelineCont extends Component {

    state = { 
        value: 0, 
        previous: 0,
        user_paintings: null 
    }

    goBack = () => {
        this.props.history.push('/')
    }

    handleTimelineClick = (index) => {
        this.setState({ 
            value: index, 
            previous: this.state.value 
        })
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/v1/timeline', {
            headers: {'Authorization': `Bearer: ${localStorage.getItem('token')}`}})
            .then(data => {
                this.setState({
                    user_paintings: data
                })  
            })
            .catch(error => {
                this.setState({
                    user_paintings: error
                }) 
            })
    }

    render() {
        if(this.state.user_paintings) {
            const paintings = this.state.user_paintings
            console.log(paintings)
        return (
            <div className="fade-in">
            <button onClick={this.goBack} type ="button" className="fade-in med-button back-button light">
                        Back to Home
                    </button>
                <h2 className="header bigger">Timeline</h2>
                {/* Bounding box for the Timeline */}
                <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
                <HorizontalTimeline
                    index={this.state.value}
                    indexClick={(e, index) => this.handleTimelineClick(e, index)}
                    values={ ['2017-10-05','2017-10-05','2018-01-05', '2018-01-07', '2018-01-10'] } 
                    styles={{background:'transparent', foreground:'#4e14f2', outline:'#dfdfdf'}}/>
                </div>
                <div className='text-center'>
                {/* any arbitrary component can go here */}    
                <TimelineAnimation />
                </div>
            </div>
        );
        } else {
            return <p className="error">Unauthorized: Login or Sign Up to view a timeline</p>
        }
    }
}


// const mapStateToProps = state => ({
//     user: state.users.currentUser
// })

// const connectedTimelineCont = connect(mapStateToProps)(TimelineCont)
// const routedTimeLineCont = withRouter(connectedTimelineCont)

export default withRouter(TimelineCont);
