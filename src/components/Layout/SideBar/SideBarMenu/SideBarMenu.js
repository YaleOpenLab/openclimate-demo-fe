import React from "react";
import "./SideBarMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faCheckCircle,
  faChartLine,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const SideBarMenu = () => {
  return (
    <div className="sidebar-menu">
      <div className="menu-items">
        <div className="menu-item">
          <div className="icon">
            <FontAwesomeIcon
              icon={faPlane}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            />
          </div>
          <div className="title">Explore</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            />
          </div>
          <div className="title">Report</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            />
          </div>
          <div className="title">Dashboard</div>
        </div>
        <div className="menu-item">
          <div className="icon">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
            />
          </div>
          <div className="title">Search</div>
        </div>
      </div>
      <div className="menu-list">
        <ul>
          <li>
            <a href={void 0} className="link">
              About >
            </a>
          </li>
          <li>
            <a href={void 0} className="link">
              Methodology >
            </a>
          </li>
          <li>
            <a href={void 0} className="link">
              Contributes >
            </a>
          </li>
          <li>
            <a href={void 0} className="link">
              Open Source >
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
