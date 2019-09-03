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
import LoginModal from "../../../Auth/Login/Login";

const SubNavigation = ({ list }) => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setOpenModal] = useState(true);

  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);

  const items = list.map(item => {
    return (
      <NavigationItem key={item.name} link={item.link}>
        {item.name}
      </NavigationItem>
    );
  });

  return (
    <MDBNavbar color="dark" className="sub-navigation" expand="md">
      <LoginModal open={modalOpen} handleClose={() => handleClose()}/>
      <MDBNavbarToggler onClick={() => setOpen(prevState => !prevState)} />
      <MDBCollapse
        id="navbarCollapse3"
        className="main-nav-menu"
        isOpen={open}
        navbar
      >
        <MDBNavbarNav left style={{ flex: 1 }}>
          <MDBNavItem active>
            <div onClick={handleShow}>Log In</div>
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
