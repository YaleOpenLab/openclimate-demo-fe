import React from "react";
import "./Review.scss";
import { connect } from "react-redux";
import { Http } from "../../../../../../services/Http";
import { Button } from "../../../../../../components/UI";

const Review = ({first_name, last_name, account_name, email, data}) => {
  const handleSubmit = () => {
    // TODO: finish when api is ready;
    // Http.registerUser(data);
    console.log(data);
  };

  return (
    <div className='review'>
      <div className="col-md-6 mx-auto content">
        <p className="description">
          Please carefully review the information you entered before submitting your request to register this account:
        </p>
        <div className="info-box">
          <h4>Account Information</h4>
          <p>Name: {account_name}</p>
          <h4>User Information</h4>
          <p>Name: {first_name} {last_name}</p>
          <p>Email Address: {email}</p>
        </div>
        <div className="actions">
          <Button
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  first_name: state.profile.register.fields.first_name,
  last_name: state.profile.register.fields.last_name,
  account_name: state.profile.register.fields.account_name,
  email: state.profile.register.fields.username,
  data: state.profile.register.fields,
});

export default connect(
  mapStateToProps,
  null
)(Review);

