import React from "react";

const Button = ({
  title,
  children,
  style,
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      style={style}
      type="submit"
      className={`form-control oc-button ${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export default Button;
