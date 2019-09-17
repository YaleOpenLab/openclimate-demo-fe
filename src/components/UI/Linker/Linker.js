import React from "react";
import "./Linker.scss";
import history from "../../../helpers/history";

const Linker = ({url, onClick, children, style}) => {
  const handleRedirection = () => {
    history.push(url);
  };

  const customCallback = () => {
    onClick();
  };

  return (
    <span
      className={'oc-linker'}
      onClick={onClick ? customCallback : handleRedirection}
      style={style}
    >
      {children}
    </span>
  );
};

export default Linker;
