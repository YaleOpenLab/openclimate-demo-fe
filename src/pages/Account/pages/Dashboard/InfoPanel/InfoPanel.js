import React from "react";
import "./InfoPanel.scss";

const InfoPanel = ({title, children}) => {
  return (
      <div className="info-panel">
        <div className="header">
          <h3>{title}</h3>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
  );
};

export default InfoPanel;
