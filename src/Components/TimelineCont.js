import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import HorizontalTimeline from 'react-horizontal-timeline'
import TimelineAnimation from './TimelineAnimation'
import axios from 'axios';

class TimelineCont extends Component {

    state = { 
        value: 0, 
        previous: 0,
        user_paintings: null,
        dates: [],
        selectedPainting: {},
        loading: false,
        error: null
    }

    goBack = () => {
        this.props.history.push('/')
    }

    createTimelineDates = () => {
        let dates = []
        if (this.state.user_paintings.length > 0) {
            this.state.user_paintings.forEach(user_painting => {
                let currentDate = user_painting.created_at.slice(0,10)
                dates.push(currentDate)
            })
        } else {
            dates = ['2000-01-01', '2000-03-01', '2000-05-01']
        }

        this.setState({
            dates: dates
        })
    }

    handleTimelineClick = (index) => {
        this.setState({ 
            value: index, 
            previous: this.state.value,
            selectedPainting: this.state.user_paintings[index]
        })
    }

    componentDidMount(){
        this.setState({
            loading: true
        })
        axios.get('http://localhost:3000/api/v1/timeline', {
            headers: {'Authorization': `Bearer: ${localStorage.getItem('token')}`}})
            .then(res => {
                this.setState({
                    user_paintings: res.data,
                    selectedPainting: res.data[0],
                    loading: false
                }, () => this.createTimelineDates())  
            })
            .catch(error => {
                this.setState({
                    error: error,
                    loading: false
                }) 
            })
    }

    render() {
        if(this.state.user_paintings) {
            const paintings = this.state.user_paintings
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
                        values={ this.state.dates } 
                        styles={{background:'transparent', foreground:'#4e14f2', outline:'#dfdfdf'}}/>
                    </div>
                    <div className='text-center'>
                    {paintings.length > 0 ? <TimelineAnimation painting={this.state.selectedPainting}/>:
                    <p>You haven't selected any artworks. Go back to home to get started :)</p>}
                    </div>
                </div>
            );
        } else if(this.state.loading) {
            return <p className="centered">Loading</p>
        } else {
            return <h4 className="error centered">Unauthorized: Login or Sign Up to view a timeline</h4>
        } 
    }
}


// const mapStateToProps = state => ({
//     user: state.users.currentUser
// })

// const connectedTimelineCont = connect(mapStateToProps)(TimelineCont)
// const routedTimeLineCont = withRouter(connectedTimelineCont)

export default withRouter(TimelineCont);
