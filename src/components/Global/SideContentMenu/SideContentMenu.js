import React, { Component } from "react";
import "./SideContentMenu.scss";
import Info from "./Info/Info";
import Menu from "./Menu/Menu";
import ComplexMenu from "./ComplexMenu/ComplexMenu";

const SideContentMenu = ({ complex, menu }) => {
  return (
    <div className="side-content-panel">
      <Info />
      {complex ? <ComplexMenu data={menu} /> : <Menu data={menu} />}
    </div>
  );
};

export default SideContentMenu;
