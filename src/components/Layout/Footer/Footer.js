import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-menu"></div>
        <div className="footer-disclaimer">
          <div className="disclaimer">
            <p>
              <b>Disclaimer:</b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Planet Earth’s atmosphere can hold a limited amount of
              CO2e emissions before raising average global temperatures above a
              safe space for humanity. This limited quantity of emissions has
              been termed our carbon budget. The threshold level that determines
              this budget is derived from physical properties in radiative
              forcing (i.e. greenhouse gas effect) and its thoroughly studied
              effects on global climate. The Paris Agreement of 2015
              consolidated a global effort to maintain this threshold to 1.5oC
              warming relative to pre-industrial levels. If present emission
              pathways are left unchecked, the budget could be consumed in as
              little as 15 years. To achieve the ambitions set in Paris, CO2
              emission must peak by 2020 and then decline radically, arriving to
              net-zero by 2050 and negative values by the end of the century.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
