import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { requestPhotos } from '../redux/actions/listingActions';

import Photo from '../components/photo/Photo';
import Pagination from '../components/pagination/Pagination';

import './screens.css';

const Photos = () => {

    const [page, setPage] = useState(0);
    const { photos } = useSelector(state => state.listing);
    const dispatch = useDispatch();

    useEffect(() => dispatch(requestPhotos(page*10)), [page])
    
    return (
        <>
        <div className="photos">
            {
                photos && photos.map(photo => (
                    <Photo key={photo.id} photo={photo} />
                ))
            }
            
        </div>
        <Pagination actualPage={page} onPageChange={(_page) => setPage(_page)} />
        </>
    );
}
 
export default Photos;