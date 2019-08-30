import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import NavigationItem from "../MainNavigation/NavigationItem/NavigationItem";
import "./SubNavigation.scss";

const SubNavigation = ({ list }) => {
  const [open, setOpen] = useState(false);
  const items = list.map(item => {
    return (
      <NavigationItem key={item.name} link={item.link}>
        {item.name}
      </NavigationItem>
    );
  });

  return (
    <MDBNavbar color="dark" className="sub-navigation" expand="md">
      <MDBNavbarToggler onClick={() => setOpen(prevState => !prevState)} />
      <MDBCollapse
        id="navbarCollapse3"
        className="main-nav-menu"
        isOpen={open}
        navbar
      >
        <MDBNavbarNav left style={{ flex: 1 }}>
          <MDBNavItem active>
            <MDBNavLink to="#">Log In</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>

        <MDBNavbarNav left style={{ flex: 3 }}>
          {items}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default SubNavigation;
