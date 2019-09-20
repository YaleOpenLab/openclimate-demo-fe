import React, { Component } from "react";
import { Button, Input } from "../../../../../../components/UI";
import "./UserInfo.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { userAccountRegisterAddFields } from "../../../../../../components/Auth/store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const RegisterScheme = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "Too Short!")
    .required("Required"),
  last_name: Yup.string()
    .min(3, "Too Short!")
    .required("Required"),
  official_title: Yup.string()
    .min(3, "Too Short!")
    .required("Required"),
  username: Yup.string()
    .min(3, "Too Short!")
    .required("Required").email(),
  phone: Yup.number()
    .required("Required"),
  agreement: Yup.bool().oneOf([true], "Must agree to something")
});

class UserInfo extends Component {
  render() {
    return (
      <div className='user-info'>
        <div className="col-md-6 mx-auto content">
          <p>Please fill out your personal information as the representative of this account:</p>
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              official_title: "",
              phone: "",
              agreement: false
            }}
            onSubmit={(values, actions) => {
              const payload = {
                username: values.username,
                first_name: values.first_name,
                last_name: values.last_name,
                official_title: values.official_title,
                phone: values.phone,
              };
              this.props.userAccountRegisterAddFields(payload);
              this.props.goNext();
            }}
            validationSchema={RegisterScheme}
          >
            {({ errors, touched }) => (
              <Form className="oc-form">
                <div className="oc-form-separator">
                  <div className="oc-separator-left">
                    <p>FIRST NAME</p>
                    <Field
                      type="text"
                      className={`form-control oc-input -radius ${
                        errors.first_name && touched.first_name
                          ? "oc-form-input-error"
                          : ""
                        }`}
                      name="first_name"
                    />
                    {errors.first_name && touched.first_name && (
                      <div className="oc-form-error-text">{errors.first_name}</div>
                    )}
                  </div>
                  <div className="oc-separator-right">
                    <p>LAST NAME</p>
                    <Field
                      type="text"
                      className={`form-control oc-input -radius ${
                        errors.last_name && touched.last_name
                          ? "oc-form-input-error"
                          : ""
                        }`}
                      name="last_name"
                    />
                    {errors.last_name && touched.last_name ? (
                      <div className="oc-form-error-text">{errors.last_name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="oc-form-separator">
                  <div className="oc-separator-full">
                    <p>OFFICIAL TITLE</p>
                    <Field
                      type="text"
                      className={`form-control oc-input -radius ${
                        errors.official_title && touched.official_title
                          ? "oc-form-input-error"
                          : ""
                        }`}
                      name="official_title"
                    />
                    {errors.official_title && touched.official_title ? (
                      <div className="oc-form-error-text">{errors.official_title}</div>
                    ) : null}
                  </div>
                </div>
                <div className="oc-form-separator">
                  <div className="oc-separator-left">
                    <p>OFFICIAL EMAIL ADDRESS</p>
                    <Field
                      type="text"
                      className={`form-control oc-input -radius ${
                        errors.username && touched.username
                          ? "oc-form-input-error"
                          : ""
                        }`}
                      name="username"
                    />
                    {errors.username && touched.username && (
                      <div className="oc-form-error-text">{errors.username}</div>
                    )}
                  </div>
                  <div className="oc-separator-right">
                    <p>PHONE NUMBER</p>
                    <Field
                      type="text"
                      className={`form-control oc-input -radius ${
                        errors.phone && touched.phone
                          ? "oc-form-input-error"
                          : ""
                        }`}
                      name="phone"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="oc-form-error-text">{errors.phone}</div>
                    ) : null}
                  </div>
                </div>
                <div className="oc-form-separator">
                  <Field name="agreement" type="checkbox" component={Checkbox}/>
                </div>
                <div className="auth-button">
                  <Button
                    variant="primary"
                    style={{ marginTop: 17 }}
                    disabled={
                      (errors.username && touched.username) ||
                      (errors.first_name && touched.first_name) ||
                      (errors.last_name && touched.last_name) ||
                      (errors.official_title && touched.official_title) ||
                      (errors.agreement && touched.agreement) ||
                      (errors.phone && touched.phone)
                    }
                  >
                    Continue
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

function Checkbox({ field, type }) {
  return (
    <label className="oc-checkbox">
      <input {...field} type={type}/>
      <span>I verify that this person is the official representative of this ACCOUNT and has the right to act on behalf of the
        ACCOUNT WITHIN THIS PLATFORM.</span>
    </label>
  );
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({ userAccountRegisterAddFields }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(UserInfo);

