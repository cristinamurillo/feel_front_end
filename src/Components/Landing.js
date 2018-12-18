import React, { Component } from 'react';
import PaintingSelect from './PaintingSelect'
import {withRouter} from 'react-router-dom'

class Landing extends Component {

    render() {
        console.log('hi from landing')
    return (
        <div className="section">
            <h1 className="fade-in">MOOD INDIGO</h1>
            <PaintingSelect />
        </div>
    );
    }
}


export default withRouter(Landing)