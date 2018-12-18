import React, { Component } from 'react';
import PaintingSelect from './PaintingSelect'
import {withRouter} from 'react-router-dom'

class Landing extends Component {

    render() {
        return (
            <div className="section">
                <h1 className="fade-in">MOOD INDIGO</h1>
                <h3 className="header fade-in slower" id="subtitle">abstractly visualize your vibe</h3>
                <PaintingSelect />
            </div>
        );
    }
}


export default withRouter(Landing)