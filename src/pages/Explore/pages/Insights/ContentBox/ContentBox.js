import React from "react";
import "./ContentBox.scss";

const ContentBox = ({ title, details }) => (
  <div className="content-box">
    <h3>{title}</h3>
    <p>{details}</p>
    <div className="content"></div>
  </div>
);

export default ContentBox;
