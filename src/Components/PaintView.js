import React, { Component } from 'react';

class PaintView extends Component {
    render() {
        const painting = this.props.painting
        console.log(painting)
        return (
            
            <div className="modal-content">
                <img data-id={painting.id} className="popup-paint" src={painting.img_url} alt="Painting"/>
                <h4>{painting.title && painting.title}</h4>
                <h5>{painting.artist && painting.artist}</h5>
                <p>{painting.description && `"${painting.description}"`}</p>
            </div>
        );
    }
}

export default PaintView;
