import React from 'react';
import './form.css';

const Form = ({ onSubmit, title, errors, children }) => {
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <h1>{title}</h1>
            {errors.length > 0 && (
                <div className="error">{errors.map((error, idx) => <p key={idx}>{error}</p>)}</div>
            )}
            <div className="inputs">
                {children}
            </div>
            <button>{title}</button>
        </form>
    );
}
 
export default Form;