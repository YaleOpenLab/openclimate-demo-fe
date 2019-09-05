import React, { Component } from "react";
import SideContentMenu from "../../../../components/Global/SideContentMenu/SideContentMenu";

class Review extends Component {
  render() {
    return (
      <div className="Review">
        <div className="row">
          <div className="col-lg-4">
            <SideContentMenu />
          </div>
          <div className="col-md-8 col-lg-6"></div>
        </div>
      </div>
    );
  }
}

export default Review;
