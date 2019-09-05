import React, { useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import NavigationItem from "../MainNavigation/NavigationItem/NavigationItem";
import "./SubNavigation.scss";
import LoginModal from "../../../Auth/Login/Login";
import { Button } from "../../../UI";
import { connect } from "react-redux";
import ROUTES from "../../../../routes/routes";
import history from "../../../../helpers/history";

const SubNavigation = ({ list = [], authorized }) => {
  const [loggedIn, setLoggedIn] = useState(authorized);
  useEffect(() => {
    if (!loggedIn && loggedIn !== authorized) {
      setLoggedIn(authorized);
    }
  });

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

  const handleLogout = () => {
    history.push(ROUTES.LOGOUT);
  };

  return (
    <MDBNavbar color="dark" className="sub-navigation" expand="md">
      <LoginModal open={modalOpen} handleClose={() => handleClose()} />
      <MDBNavbarToggler onClick={() => setOpen(prevState => !prevState)} />
      <MDBCollapse
        id="navbarCollapse3"
        className="main-nav-menu"
        isOpen={open}
        navbar
      >
        <MDBNavbarNav left style={{ flex: 1 }}>
          {loggedIn ? (
            <div className="login-panel" onClick={handleLogout}>
              <Button variant="secondary">Log Out</Button>
            </div>
          ) : (
            <div className="login-panel" onClick={handleShow}>
              <Button variant="secondary">Log In</Button>
            </div>
          )}
        </MDBNavbarNav>

        <MDBNavbarNav left style={{ flex: 3 }}>
          {items}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

const mapStateToProps = state => ({
  authorized: state.profile.account.authorized
});

export default connect(
  mapStateToProps,
  null
)(SubNavigation);
