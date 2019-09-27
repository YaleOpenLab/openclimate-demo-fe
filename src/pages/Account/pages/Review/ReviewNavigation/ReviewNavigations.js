import React from "react";
import "./ReviewNavigation.scss";
import { MDBNavItem, MDBNavLink } from "mdbreact";

const ReviewNavigation = ({ list = [] }) => {
  const items = [];
  list.map(item => {
    items.push(
      <MDBNavLink
        key={item.url}
        activeClassName="is-active"
        className={`navigation-link `}
        to={item.url}
      >
        {item.title}
        <div className="active-overlay" />
      </MDBNavLink>
    );
  });
  return (
    <div className="review-navigation">
      <div className="container">
        <h3>Issues & Disputes</h3>
        <div className="navigation-section">{items}</div>
      </div>
    </div>
  );
};

export default ReviewNavigation;
