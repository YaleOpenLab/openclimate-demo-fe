import React from 'react';

const Button = ({title, children, style, variant = 'primary', disabled = false}) => {
    return (
        <button
            style={style}
            className={`form-control oc-button ${variant}`}
            disabled={disabled}
        >
            {title || children}
        </button>
    )
};

export default Button;