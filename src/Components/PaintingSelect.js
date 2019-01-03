import React, { Component } from 'react';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {fetchPaintings} from '../redux/paintingActions'
import {fetchColors} from '../redux/animationActions'
import {fetchCurrentUser, postJoin} from '../redux/userActions'
import SinglePaint from './SinglePaint'
import PaintList from './PaintList'
import axios from 'axios'


const PAINTINGS_URL = "http://localhost:3000/paintings/"

class PaintingSelect extends Component {

    state = {
        img_url: "",
        title: null,
        artist: null,
        description: null,
        fullForm: false,
        singleView: true,
        errorMessage: null
    }

    componentDidMount() {
        this.props.dispatch(fetchPaintings())
        localStorage.getItem('token') && this.props.dispatch(fetchCurrentUser(localStorage.getItem('token')))
    }

    showTip = () => { document.getElementById('tooltip-text').style.visibility = "visible" }

    hideTip = () => { document.getElementById('tooltip-text').style.visibility = "hidden" }

    changeHandler = (e) => {
        if(e.target.name === "img_url"){
            this.setState({
                fullForm: true
            })
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleCheckChange = event => {
        this.setState({
            singleView: !this.state.singleView
        })
    }
    
    submitURLHandler = (e) => {
        e.preventDefault()
         let painting = {
            img_url: this.state.img_url,
            title: this.state.title,
            artist: this.state.artist,
            description: this.state.description
        }
        axios.post(PAINTINGS_URL, painting)
            .then(response => {
                let painting = response.data.data
                this.props.dispatch(fetchColors(painting.id))
                this.props.dispatch(postJoin(this.props.user.id, painting.id))
                this.props.history.push('/animation')
            })
            .catch(error => {
                console.log(error.response)
                if(error.response.status === 500){
                    this.setState({
                        errorMessage: "Invalid url. Please try right-clicking on an image and selecting 'Copy Image Address'."
                    })
                } else {
                    this.setState({
                        errorMessage: error.response.data.message
                    })
                }
            })
    }

    render() {
        const { error, paintings } = this.props //come back to this to add loading and error
        if(error){
            return <p className="error">{error.message}</p>
        }
        return (
        <div className="section">
            <p id="tooltip-text" >Select an artwork or copy/paste the URL of an image you vibe with. Don't overthink it, just go with something you feel an affinity to.</p>
            <h3 className="header">Choose an Artwork
                <span className="tooltip-select" id="help" onMouseOver={this.showTip} onMouseLeave={this.hideTip}>?</span>
            </h3>
            
    
            <div id="toggle">
            <p>Toggle View</p>
            <label className="switch">
                <input type="checkbox" onChange={this.handleCheckChange} checked={this.state.singleView}/>
                <span className="slider"/>
            </label>
            </div>
            <form onSubmit={this.submitURLHandler} className="vertical-form large">
                <input id="img-url" type="text" name="img_url" placeholder="Image URL" value={this.state.img_url} onChange ={this.changeHandler} required/>
                {this.state.fullForm &&
                <React.Fragment>
                <input id="img-url" type="text" name="title" placeholder="Title (optional)" value={this.state.title} onChange ={this.changeHandler}/>
                <input id="img-url" type="text" name="artist" placeholder="Artist (optional)" value={this.state.artist} onChange ={this.changeHandler}/>
                <input id="img-url" type="text" name="description" placeholder="Description (optional) " value={this.state.description} onChange ={this.changeHandler}/>
                </React.Fragment>
                }
                <input type= "submit" value="Submit" style={{width: "14em", margin: "0 auto"}}/>
            </form>
            {this.state.errorMessage && <p className="error">{this.state.errorMessage}</p>}
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
    user: state.users.currentUser
})

const connectedPaintingSelect = connect(mapStateToProps)(PaintingSelect)
const routedPaintingSelect = withRouter(connectedPaintingSelect)

export default routedPaintingSelect;