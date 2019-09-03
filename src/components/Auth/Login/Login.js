import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import "./Login.scss";

const LoginModal = ({open, handleClose}) => {

    return (
        <Modal show={open} onHide={handleClose} className='login-modal'>
            <Modal.Body>
                <p>Username</p>
                <input type="text"/>
                <p>Password</p>
                <input type="password"/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Register
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default LoginModal;