// contains logic to render a single lable and text input
// ...input is used to set all properties and keys (eventhandlers) that are defined in props.input ex onBlur={input.OnBlur}
import React from 'react';

export default ({ input, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} />  
        </div>
    );
};