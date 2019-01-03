import React, { Component } from 'react';
import axios from 'axios';

class EditForm extends Component {
    state = {
        img_url: "",
        title: "",
        description: "",
        artist: ""
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.setState({
            img_url: this.props.url
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:3000/paintings/${this.props.paintid}`, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <input id="img-url" type="text" name="title" placeholder="Title (optional)" value={this.state.title} onChange ={this.changeHandler}/>
                <input id="img-url" type="text" name="artist" placeholder="Artist (optional)" value={this.state.artist} onChange ={this.changeHandler}/>
                <input id="img-url" type="text" name="description" placeholder="Description (optional) " value={this.state.description} onChange ={this.changeHandler}/>
                <input type= "submit" value="Submit" style={{width: "14em", margin: "0 auto"}}/>
                </form>
            </div>
        );
    }
}

export default EditForm;
