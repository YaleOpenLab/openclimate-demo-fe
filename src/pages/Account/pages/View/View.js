import React, { Component } from "react";
import SideContentMenu from "../../../../components/Global/SideContentMenu/SideContentMenu";

class View extends Component {
  render() {
    return (
        <div className="account-view">
          <div className="row">
            <div className="col-lg-4">
              <SideContentMenu complex />
            </div>
            <div className="col-md-8 col-lg-6"></div>
          </div>
        </div>
    );
  }
}

export default View;
