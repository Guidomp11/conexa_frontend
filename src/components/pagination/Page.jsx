import React from 'react';

const Page = ({actualpage, onPageSelect}) => {
    return (
        <div className="page">
            <button
                onClick={() => onPageSelect(actualpage*10)}
            >
                {actualpage+1}
            </button>
        </div>
    );
}
 
export default Page;