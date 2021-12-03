import React from 'react';
import './photo.css';

const Photo = ({photo}) => {
    
    const { albumId, thumbnailUrl, title } = photo;

    return (
        <div className="photo">
            <img src={thumbnailUrl} />
            <h2>{title}</h2>
            <p>AlbumId: {albumId}</p>
        </div>
    );
}
 
export default Photo;