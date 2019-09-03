import React from "react";
import { Modal} from "react-bootstrap";
import "./Login.scss";
import {Button, Input} from "../../UI";

const LoginModal = ({open, handleClose}) => {

    return (
        <Modal show={open} onHide={handleClose} className='login-modal'>
            <Modal.Body>
                <p>Username</p>
                <Input type="text" placeholder='Required Field'/>
                <p>Password</p>
                <Input type="password" placeholder='Required Field'/>
                <Button variant="primary" style={{marginTop: 17}} onClick={handleClose}>
                    Login
                </Button>
                <div className="register-container">
                    <div style={{flex: 1}}></div>
                    <Button variant="secondary" style={{marginTop: 17, flex: 1}} onClick={handleClose}>
                        Register
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
};

export default LoginModal;