import React from "react";
import { MDBNavItem, MDBNavLink } from "mdbreact";

const NavigationItem = props => (
  <React.Fragment>
    <MDBNavLink
      activeClassName="is-active"
      className={`navigation-link ${props.diffClass ? props.diffClass : ""}`}
      to={props.link}
    >
      <MDBNavItem>{props.children}</MDBNavItem>
    </MDBNavLink>
    {props.divider ? <div className="nav-border-diveider" /> : ""}
  </React.Fragment>
);

export default NavigationItem;
