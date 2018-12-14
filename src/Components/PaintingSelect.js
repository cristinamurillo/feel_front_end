import React, { Component } from 'react';
import SinglePaint from './SinglePaint'
import axios from 'axios'
const PAINTINGS_URL = "http://localhost:3000/paintings/"
class PaintingSelect extends Component {

    state = {
        img_url: ""
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }  

    submitHandler = (e) => {
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

    paintingDisplay = () => {
        axios.get(PAINTINGS_URL)
            .then(response => {
                console.log(response.data)
            })
    }

    render() {
    return (
        <div class="section">
        <h3 class="header">Choose an Artwork</h3>
            <form onSubmit={this.submitHandler}>
                <input id="img-url" type="text" name="img_url" placeholder="Image URL" value={this.state.img_url} onChange ={this.changeHandler}/>
                <input type= "submit" value="Submit"/>
            </form>
            {/* {this.paintingDisplay()} */}
            <SinglePaint />
        </div>
    );
    }
}

export default PaintingSelect;