import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import SideBar from "./SideBar/SideBar";
import EarthView from "../../../../assets/images/earth-preview-sm.png";
import "./Insights.scss";
import ContentBox from "./ContentBox/ContentBox";

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
                <img src={EarthView} />
              </div>
            </div>
          </div>
        </Container>
        <Container className="secondary-content">
          <ContentBox title='Data Visualisation Title' details='Data Visualisation Details'/>
          <ContentBox title='Data Visualisation Title' details='Data Visualisation Details'/>
        </Container>
      </div>
    );
  }
}

export default Insights;
