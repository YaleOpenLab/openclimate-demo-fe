import React from "react";

const Input = ({ value, type, placeholder, style, className, onChange, name }) => {
  return (
    <input
      type={type}
      className={`form-control oc-input ${className ? className : ''}`}
      name={name}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
