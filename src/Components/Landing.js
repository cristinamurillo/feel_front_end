import React, { Component } from 'react';
import PaintingSelect from './PaintingSelect'

class Landing extends Component {

    render() {
    return (
        <div className="section">
            <h1 className="fade-in">MOOD INDIGO</h1>
            <PaintingSelect />
        </div>
    );
    }
}



export default Landing