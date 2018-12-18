import React, { Component } from 'react';
import {connect} from "react-redux"
import {fetchPaintings} from '../redux/paintingActions'
import SinglePaint from './SinglePaint'
import axios from 'axios'


const PAINTINGS_URL = "http://localhost:3000/paintings/"

class PaintingSelect extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPaintings())
    }

    state = {
        img_url: "",
        paintsSeen: [0],
        currentPaint: 0
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    submitURLHandler = (e) => {
        e.preventDefault()
        console.log("submit hit")
        axios.post(PAINTINGS_URL, {img_url: this.state.img_url})
            .then(response => {
                console.log(response.data)
                let painting = response.data.data
                axios.get(PAINTINGS_URL + painting.id + "/colors")
                    .then(colors => {
                        console.log(colors.data)
                    })
            })
    }

    randomNum = (array) => {
        let index = 0
        while(this.state.paintsSeen.includes(index)) {
            index = Math.floor(Math.random()*array.length)
        }
        
        this.setState({
            paintsSeen: [...this.state.paintsSeen, index],
            currentPaint: index 
        })
     
        return index 
    }

    render() {
        const { error, loading, paintings } = this.props //come back to this to add loading and error
        if(error){
            return <div>{error.message}</div>
        }
        return (
        <div className="section">
        <h3 className="header">Choose an Artwork</h3>
            <form onSubmit={this.submitURLHandler}>
                <input id="img-url" type="text" name="img_url" placeholder="Image URL" value={this.state.img_url} onChange ={this.changeHandler}/>
                <input type= "submit" value="Submit"/>
            </form>

            {paintings.length > 0 && <SinglePaint img={paintings[this.state.currentPaint]}/>}
            <button onClick={() => this.randomNum(paintings)} className="med-button">Another One</button>
            {/* {paintings.map(painting => console.log(painting))} */}
        </div>
    );
    }
}

const mapStateToProps = state => ({
    paintings: state.paintings.paintings,
    loading: state.paintings.loading,
    error: state.paintings.error
})

export default connect(mapStateToProps)(PaintingSelect);