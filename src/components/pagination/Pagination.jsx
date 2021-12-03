import React from 'react';
import Page from './Page';
import './pagination.css';

const Pagination = ({actualPage, onPageChange}) => {
    return (
        <div className="pagination">
            {actualPage > 0 && 
                <button
                    onClick={() => onPageChange(actualPage-1)}
                >Anterior</button>
            }
            <Page actualpage={actualPage} onPageSelect={onPageChange} />
            <button
                onClick={() => onPageChange(actualPage+1)}
            >Siguiente</button>
        </div>
    );
}
 
export default Pagination;