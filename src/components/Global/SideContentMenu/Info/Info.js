import React from "react";
import EarthLogo from "../../../../assets/images/earth-preview-sm.png";

const Info = ({}) => {
  return (
    <div className="info">
      <div className="header">Earth</div>
      <div className="body">
        <div className="image-section">
          <div className="image-container">
            <img src={EarthLogo} alt="" />
          </div>
        </div>
        <div className="content">
          <div className="section --first">
            <ol>
              <li className="value">0.98</li>
              <li className="title">°C warming Relative to 1980</li>
            </ol>
            <ol>
              <li className="value">411</li>
              <li className="title">CO2 ppm</li>
            </ol>
          </div>
          <div className="section">
            <h4>carbon budget</h4>
            <ol>
              <li className="value">550</li>
              <li className="title">Gt CO2e left Based on a 1.5 target</li>
            </ol>
            <ol>
              <li className="value">50</li>
              <li className="title">GtCOe/year</li>
              <li className="highlight">15 YEAR RISK</li>
              <li className="title">to Budget Depletion</li>
            </ol>
          </div>
          <div className="see-more">
            <a href={void(0)}>See Earth Status ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
