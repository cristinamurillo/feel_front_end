import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import PaintView from './PaintView'



class UserPaintList extends Component {
    render() {
        let paintings = this.props.paintings
        let key = 0;
        return (
            <div className="paint-list fade-in scroll">
                {paintings.map(painting => {
                    key+=1
                    return (
                        <Popup
                           trigger={<img data-id={painting.id} key={key} className="listed-paint" src={painting.img_url} alt="Painting"/>}
                           modal
                           closeOnDocumentClick
                        >
                            <PaintView painting={painting}/>
                        </Popup>
                    )
                })}       
            </div>
         
     
        );
    }
}

export default UserPaintList;
