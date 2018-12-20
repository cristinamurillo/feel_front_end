import React, { Component } from 'react';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {fetchPaintings} from '../redux/paintingActions'
import {fetchColors} from '../redux/animationActions'
import SinglePaint from './SinglePaint'
import PaintList from './PaintList'
import axios from 'axios'


const PAINTINGS_URL = "http://localhost:3000/paintings/"

class PaintingSelect extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPaintings())
    }

    state = {
        img_url: "",
        singleView: true
        // paintsSeen: [0],
        // currentPaint: 0
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleCheckChange = event => {
        console.log(this.state.singleView)
        this.setState({
            singleView: !this.state.singleView
        })
    }
    
    submitURLHandler = (e) => {
        e.preventDefault()
        console.log("submit hit")
        axios.post(PAINTINGS_URL, {img_url: this.state.img_url})
            .then(response => {
                let painting = response.data.data
                this.props.dispatch(fetchColors(painting.id))
                this.props.history.push('/animation')
            })
    }

    render() {
        const { error, loading, paintings } = this.props //come back to this to add loading and error
        if(error){
            return <div>{error.message}</div>
        }
        return (
        <div className="section">
        <h3 className="header">Choose an Artwork</h3>
            <div id="toggle">
            <p>Toggle View</p>
            <label class="switch">
                <input type="checkbox" onChange={this.handleCheckChange} checked={this.state.singleView}/>
                <span class="slider"/>
            </label>
            </div>
            <form onSubmit={this.submitURLHandler}>
                <input id="img-url" type="text" name="img_url" placeholder="Image URL" value={this.state.img_url} onChange ={this.changeHandler}/>
                <input type= "submit" value="Submit"/>
            </form>
           {this.state.singleView && paintings.length > 1 ? 
            <SinglePaint />
            :<PaintList/>
           }

        </div>
    );
    }
}

const mapStateToProps = state => ({
    paintings: state.paintings.paintings,
    error: state.paintings.error,
    colors: state.animations.colors,
    loading: state.animations.loading //do i need these last two?
})

const connectedPaintingSelect = connect(mapStateToProps)(PaintingSelect)
const routedPaintingSelect = withRouter(connectedPaintingSelect)

export default routedPaintingSelect;