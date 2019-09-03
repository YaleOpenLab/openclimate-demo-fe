import React from 'react';
import "./Input.scss";

const Input = ({value, type, placeholder, style}) => {
    return (
        <input type={type} className='form-control oc-input' style={style} placeholder={placeholder} value={value}/>
    )
};

export default Input;