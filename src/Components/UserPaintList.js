import React, { Component } from 'react';


class UserPaintList extends Component {
    render() {
        let paintings = this.props.paintings
        console.log(paintings)
        return (
            <div className="paint-list fade-in scroll">
                {paintings.map(painting => {
                    return <img data-id={painting.id} className="listed-paint" src={painting.img_url} alt="Painting"/>
                })}       
            </div>
        );
    }
}

export default UserPaintList;
