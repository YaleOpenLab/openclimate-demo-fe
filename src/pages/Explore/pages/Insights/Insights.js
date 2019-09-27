import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import SideBar from "./SideBar/SideBar";
import EarthView from "../../../../assets/images/earth-preview-sm.png";
import "./Insights.scss";

class Insights extends Component {
  render() {
    return (
      <div className={"Insights"}>
        <Container rightBar={<SideBar />}>
          <div className="main-content">
            <h2 className="title">Earth</h2>
            <p>Aggregate planetary state</p>
            <div className="map-area">
              <div className="image-container">
                <img src={EarthView} alt="globe" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Insights;
