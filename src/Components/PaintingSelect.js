import React, { Component } from 'react';
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

    render() {
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <input type="text" name="img_url" placeholder="Image URL" value={this.state.img_url} onChange ={this.changeHandler}/>
                <input type= "submit" value="Submit"/>
            </form>
        
        </div>
    );
    }
}

export default PaintingSelect;