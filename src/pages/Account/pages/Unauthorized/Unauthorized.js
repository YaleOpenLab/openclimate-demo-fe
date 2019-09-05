import React, { useState, useEffect } from "react";
import "./Unauthorized.scss";
import Container from "../../../../hoc/Container/Container";
import { Redirect } from "react-router-dom";
import ROUTES from "../../../../routes/routes";
import { connect } from "react-redux";

const Unauthorized = ({ authorized }) => {
  const [redirect, setRedirect] = useState(authorized);

  useEffect(() => {
    if (!redirect && redirect !== authorized) {
      setRedirect(authorized);
    }
  });

  if (redirect) {
    return <Redirect to={ROUTES.ACCOUNT} />;
  }

  return (
    <Container style={{ minHeight: 550 }}>
      <div className="unauthorized">
        <div className="content">
          <div className="welcome">Log In or Register</div>
          <div className="welcome">to access your account</div>
          <div className="welcome">and management tools</div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  authorized: state.profile.account.authorized
});

export default connect(
  mapStateToProps,
  null
)(Unauthorized);
