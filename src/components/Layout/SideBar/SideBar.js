import React, { Component } from "react";
import "./SideBar.scss";
import EarthImage from "../../../assets/images/earth-preview-sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import InfoArea from "./InfoArea/InfoArea";
import SideBarMenu from "./SideBarMenu/SideBarMenu";

class SideBar extends Component {
  render() {
    const { active, toggleSideBar } = this.props;
    return (
      <nav className={`SideBar ${active ? "active" : ""}`}>
        <div className="header">
          <div
            style={{ display: "flex", alignItems: "center", color: "white" }}
            onClick={toggleSideBar}
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ height: "20px", width: "29px", cursor: "pointer" }}
            />
          </div>
          <div
            style={{ display: "flex", alignItems: "center", color: "white" }}
            onClick={toggleSideBar}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ height: "15px", width: "15px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="sidebar-body">
          <div className="image-area">
            <img src={EarthImage} alt="" />
          </div>
          <InfoArea />
          <div className="bottom-part">
            <SideBarMenu />
          </div>
          <div className="footer">
            Terms of reference for using this platform, who is responsible for
            what, and open source nature of it.
            <div>
              <a href={void 0} className="oc-link">
                See more >
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SideBar;
