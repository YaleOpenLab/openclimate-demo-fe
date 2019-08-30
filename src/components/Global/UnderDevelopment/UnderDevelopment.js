import React, { Component } from "react";
import "./UnderDevelopment.scss";
const UnderDevelopment = ({ title }) => (
  <div className="under-development">
    <div className="content">
      <div className="welcome">Welcome to</div>
      <div className="title">{title}</div>
      <div className="notice">Work in progress</div>
    </div>
  </div>
);

export default UnderDevelopment;
