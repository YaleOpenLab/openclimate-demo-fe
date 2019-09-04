import React from "react";
import "./Unauthorized.scss";
import Container from "../../../../hoc/Container/Container";

const Unauthorized = ({}) => (
    <Container style={{minHeight: 550}}>
        <div className="unauthorized">
            <div className="content">
                <div className="welcome">Log In or Register</div>
                <div className="welcome">to access your account</div>
                <div className="welcome">and management tools</div>
            </div>
        </div>
    </Container>
);

export default Unauthorized;
