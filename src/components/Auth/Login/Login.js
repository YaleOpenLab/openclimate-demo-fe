import React, {useRef, useEffect} from "react";
import {Modal} from "react-bootstrap";
import "./Login.scss";
import {Button, Input} from "../../UI";
import * as Yup from "yup";
import {fetchUserAccount} from "../store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Formik, Form, Field} from "formik";
import {useSnackbar} from "notistack";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Too Short!")
        .required("Required"),
    password: Yup.string()
        .min(1, "Too Short!")
        .required("Required")
});


const LoginModal = ({open, handleClose, fetchUserAccount, error, loading, authorized}) => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    let prevAmount;
    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    };

    prevAmount = usePrevious({authorized, error});

    useEffect(() => {
        if (authorized && prevAmount && authorized !== prevAmount.error) {
            enqueueSnackbar('Welcome!', {
                variant: 'success',
                autoHideDuration: 1000,
            });
            handleClose();
        }
    }, [authorized]);

    useEffect(() => {
        if (error && prevAmount && error !== prevAmount.error) {
            enqueueSnackbar(error, {
                variant: 'error'
            });
        }
    }, [error]);

    return (
        <Modal show={open} onHide={handleClose} className='login-modal'>
            <Modal.Body>
                <Formik
                    initialValues={{username: "", password: ""}}
                    onSubmit={(values, actions) => {
                        const payload = {
                            username: values.username,
                            password: values.password
                        };
                        fetchUserAccount(payload);
                    }}
                    validationSchema={LoginSchema}
                >
                    {({errors, touched}) => (
                        <Form className="solar-form">
                            <div>
                                <p>Username</p>
                                <Field
                                    type="text"
                                    className={`form-control oc-input ${
                                        errors.username && touched.username
                                            ? "oc-form-input-error"
                                            : ""
                                    }`}
                                    name="username"
                                    placeholder="Required Field"
                                />
                                {errors.username && touched.username && (
                                    <div className="oc-form-error-text">{errors.username}</div>
                                )}
                            </div>
                            <div>
                                <p>Password</p>
                                <Field
                                    type="password"
                                    className={`form-control oc-input ${
                                        errors.password && touched.password
                                            ? "oc-form-input-error"
                                            : ""
                                    }`}
                                    name="password"
                                    placeholder="Required Field"
                                />
                                {errors.password && touched.password ? (
                                    <div className="oc-form-error-text">{errors.password}</div>
                                ) : null}
                            </div>
                            <div className="auth-button">
                                <Button
                                    variant="primary"
                                    style={{marginTop: 17}}
                                    onClick={handleClose}
                                    disabled={
                                        (errors.username && touched.username) ||
                                        (errors.password && touched.password)
                                    }

                                >
                                    Login
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="register-container">
                    <div style={{flex: 1}}/>
                    <Button variant="secondary" style={{marginTop: 17, flex: 1}} onClick={handleClose}>
                        Register
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
};

const mapStateToProps = state => ({
    error: state.profile.account.error,
    loading: state.profile.account.isLoading,
    authorized: state.profile.account.authorized,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({fetchUserAccount}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginModal);
