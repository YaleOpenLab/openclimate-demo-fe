import React from "react";
import { Component } from "react";
import "./landing.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import globe from "../static/globe.png";
import carbon_data from "../static/carbon-data.png";
import { NavLink, Switch, Route } from "react-router-dom";
import SlideMenu from "../components/SlideMenu";

class Landing extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { visibleMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ visibleMenu: !this.state.visibleMenu });
  }
  render() {
    return (
      <div>
        <SlideMenu
          onclick={this.toggleMenu}
          menuVisibility={this.state.visibleMenu}
        />
        <div class="menuBarsLand" onClick={this.toggleMenu}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <div className="fullHeight">
          <Content />
        </div>
        <div className="fullHeight">
          <GlobalData />
        </div>
        <div className="fullHeight">
          <GlobalEmissionsGen />
        </div>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h2 className="climateheader1">OPENCLIMATE</h2>
        <p className="climateheader2">
          A single climate accounting system with global consensus.
        </p>
        <p className="climateheader3">
          As we move to a stricter management of carbon in our atmospheric
          commons  — to prevent global warming from exceeding a dangerous
          threshold— we must revise the process of transparent carbon and
          climate accounting.
        </p>
        <NavLink to="/homepage">
          <button className="enterButton">ENTER</button>
        </NavLink>
      </div>
    );
  }
}

class GlobalData extends Component {
  render() {
    return (
      <div>
        <div className="textDiv">
          <p className="globaldataheader">Global Carbon Data</p>
          <p className="globaltext">
            Planet Earth’s atmosphere can hold a limited amount of CO2e
            emissions before raising average global temperatures above a safe
            space for humanity. This limited quantity of emissions has been
            termed our carbon budget. The threshold level that determines this
            budget is derived from physical properties in radiative forcing
            (i.e. greenhouse gas effect) and its thoroughly studied effects on
            global climate. The Paris Agreement of 2015 consolidated a global
            effort to maintain this threshold to 1.5oC warming relative to
            pre-industrial levels. If present emission pathways are left
            unchecked, the budget could be consumed in as little as 15 years. To
            achieve the ambitions set in Paris, CO2 emission must peak by 2020
            and then decline radically, arriving to net-zero by 2050 and
            negative values to the end of the century.
          </p>
        </div>
        <img className="carbon_data" src={carbon_data} alt="CarbonData" />
      </div>
    );
  }
}

class GlobalEmissionsGen extends Component {
  render() {
    var oracle = <a href="/oracle">Planet Oracle > </a>;
    var method = <a href="/methodology">Methodology > </a>;
    var data = <a href="/datasources">Data Sources > </a>;
    return (
      <div className="explorerDiv">
        <p className="globalemissionheader">Global Emissions & Gaps Explorer</p>
        <p className="globalemissiontext">
          The Emissions & Gaps Explorer shows the aggregate level of global
          pathways to meet the Paris Agreement, the aggregate effect of
          Nationally Determined Contributions (NDC) and the observed emissions.
          Data is presented from different reputable data platforms, as well as
          a general assessment of these through a planetary emissions Oracle
          (see ‘All’ tab). See more: {oracle} | {method} | {data}{" "}
        </p>
      </div>
    );
  }
}

export default Landing;
