import React, { Component } from "react";
import "./SideContentMenu.scss";
import EarthLogo from "../../../assets/images/earth-preview-sm.png";
import Info from "./Info/Info";
import Menu from "./Menu/Menu";

class SideContentMenu extends Component {
  render() {
    return (
      <div className="side-content-panel">
        <Info />
        <Menu />
      </div>
    );
  }
}

export default SideContentMenu;
