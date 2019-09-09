import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import "./Review.scss";
import CarbonBalance from "./CarbonBalance/CarbonBalance";
import ClimateReports from "./ClimateReports/ClimateReports";

class Review extends Component {
  render() {
    return (
        <div className='account-review'>
          <Container>
            <CarbonBalance />
            <ClimateReports />
          </Container>
          <Container fluid>
            Menu
          </Container>
        </div>
    );
  }
}

export default Review;
