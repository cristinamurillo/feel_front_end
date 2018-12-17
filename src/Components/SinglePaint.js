import React, { Component } from 'react';
import axios from 'axios'



class SinglePaint extends Component {

   
    render() {
        console.log(this.props.img)
        let url = this.props.img.attributes["img-url"]
    return (
       
        <div class="section">
            <img id= "single-paint" src={url} alt="Painting"/>
        </div>
    );
    }
}

export default SinglePaint;