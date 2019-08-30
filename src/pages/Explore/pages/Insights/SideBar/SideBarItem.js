import React from "react";

const SideBarItem = ({ value, title, description }) => (
  <div className="side-bar-item">
    <ol>
      <li className="value">{value}</li>
      <li className="title">{title}</li>
      <li className="description">{description}</li>
    </ol>
  </div>
);

export default SideBarItem;
