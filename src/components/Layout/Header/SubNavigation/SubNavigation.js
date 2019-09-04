import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import NavigationItem from "../MainNavigation/NavigationItem/NavigationItem";
import "./SubNavigation.scss";
import LoginModal from "../../../Auth/Login/Login";
import {Button} from "../../../UI";

const SubNavigation = ({ list=[] }) => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setOpenModal] = useState(false);

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
          <div className='login-panel' onClick={handleShow}>
            <Button variant='secondary'>Log In</Button>
          </div>
        </MDBNavbarNav>

        <MDBNavbarNav left style={{ flex: 3 }}>
          {items}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default SubNavigation;
