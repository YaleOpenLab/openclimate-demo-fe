import React from 'react';
import "./Button.scss";

const Button = ({title, children, style, variant = 'primary'}) => {
    return (
        <button
            style={style}
            className={`form-control oc-button ${variant}`}
        >
            {title || children}
        </button>
    )
};

export default Button;