import React from "react";
import { Component } from "react";

class PublicNationSlide extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { currentlyVisible: false };
  }
  render() {
    var visibility = "hide";
    if (this.props.visibility && this.props.earth) {
      visibility = "slideRightSmall";
    }
    if (this.props.visibility == false && this.props.earth) {
      visibility = "slideLeftSmall";
    }
    return (
      <div id="multiSlider" className={visibility}>
        NDC data goes here
      </div>
    );
  }
}

export default PublicNationSlide;
