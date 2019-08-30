import React, { Component } from "react";
import Container from "../../../../hoc/Container/Container";
import UnderDevelopment from "../../../../components/Global/UnderDevelopment/UnderDevelopment";
import SideContentMenu from "../../../../components/Global/SideContentMenu/SideContentMenu";

class Review extends Component {
  render() {
    return (
      <div className="Review">
        <div className="row">
          <div className="col-lg-4">
            <SideContentMenu />
          </div>
          <div className="col-lg-8">
            content
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
