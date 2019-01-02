import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'


class UserPaintList extends Component {
    render() {
        let paintings = this.props.paintings
        let key = 0;
        return (
            <ScrollableAnchor id={'collection'}>
            <div className="paint-list fade-in scroll">
                {paintings.map(painting => {
                    key+=1
                    return <img data-id={painting.id} key={key} className="listed-paint" src={painting.img_url} alt="Painting"/>
                })}       
            </div>
            </ScrollableAnchor>
     
        );
    }
}

export default UserPaintList;
