import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import OrganizationLogo from "../../../../assets/images/avangrid_logo.png";
import "./Dashboard.scss";
import InfoPanel from "./InfoPanel/InfoPanel";
import ClimateData from "../../../../assets/images/temp/climate-data.png";
import Rating from "./Rating/Rating";
import Climate from "./sections/Climate/Climate";
import Pledges from "./sections/Pledges/Pledges";
import ReportingProfile from "./sections/ReportingProfile/ReportingProfile";

class Dashboard extends Component {
  render() {
    return (
      <Container className="Dashboard">
        <div className="row">
          <div className="info-header col-12">
            <div className="image">
              <img src={OrganizationLogo} alt="organization logo" />
            </div>
            <div className="description">
              <h1>Avangrid Inc.</h1>
              <p>National Company</p>
            </div>
          </div>
          <div className="col-12">
            <div className="info-card">
              <div className="main-panel">
                <div className="row">
                  <div className="col-md-4">
                    <div className="left">
                      <h2>NDC Accounting:</h2>
                      <p>United States ></p>
                      <div className="image">
                        <img src={OrganizationLogo} alt="location" />
                      </div>
                      <a className="oc-link" href={void 0}>
                        Scopes >
                      </a>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="right">
                      <h2>CLIMATE ACTIONS SCOPES & METRICS:</h2>
                      <div className="panel-buttons">
                        <button className="dark">Emissions</button>
                        <button className="medium">Mitigation</button>
                        <button className="light">Adaptation</button>
                      </div>
                      <div className="updated">
                        <span>LAST UPDATED:</span> June 2019
                      </div>
                      <div className="boxes">
                        <div className="box">
                          <ul>
                            <li className="value">
                              <span>+</span>1.3
                            </li>
                            <li className="description">Mt CO2e/year</li>
                            <li className="description">Direct Emissions</li>
                            <li className="oc-link">Review ></li>
                          </ul>
                        </div>
                        <div className="box">
                          <ul>
                            <li className="value">
                              <span>+</span>1.3
                            </li>
                            <li className="description">Mt CO2e/year</li>
                            <li className="description">Direct Emissions</li>
                            <li className="oc-link">Review ></li>
                          </ul>
                        </div>
                        <div className="box">
                          <ul>
                            <li className="value">
                              <span>+</span>1.3
                            </li>
                            <li className="description">Mt CO2e/year</li>
                            <li className="description">Direct Emissions</li>
                            <li className="oc-link">Review ></li>
                          </ul>
                        </div>
                        <div className="box">
                          <ul>
                            <li className="value">
                              <span>+</span>1.3
                            </li>
                            <li className="description">Mt CO2e/year</li>
                            <li className="description">Direct Emissions</li>
                            <li className="oc-link">Review ></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 info-cont">
            <Climate />
          </div>
          <div className="col-md-4 info-cont">
            <Pledges />
          </div>
          <div className="col-md-4 info-cont">
            <ReportingProfile />
          </div>
        </div>
      </Container>
    );
  }
}

export default Dashboard;
