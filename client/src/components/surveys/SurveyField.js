// contains logic to render a single lable and text input
// ...input is used to set all properties and keys (eventhandlers) that are defined in props.input ex onBlur={input.OnBlur}
import React from 'react';

export default ({ input, label, meta: { error, touched} }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}/> 
            <div className="red-text" style={{ marginBottom: '20px'}}>
            {touched && error}
            </div> 
        </div>
    );
};