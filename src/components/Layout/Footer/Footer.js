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
              Disclaimer: This Open Climate portal is an alpha prototype being
              developed as part of a broader open source project, which explore
              the use of distributed ledger technologies (DLT) and other
              emerging technologies to enable a transparent global climate
              accounting system. This version is undergoing constant updates and
              may not reflect the full state of the project. More established
              versions might be hosted in an internal url for staging and
              sandboxing purpose. Please{" "}
              <a className="oc-link" href="mailto:martin.wainstein@yale.edu">
                contact us
              </a>{" "}
              for any question related to the current state of the project and
              platform. Whilst the platform is currently incubated at the Yale
              Open Innovation Lab, it combines other platforms and represents a
              decentralized open source initiative.{" "}
              <a
                className="oc-link"
                href="http://www.openlab.yale.edu/open-climate"
              >
                Learn more >
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
