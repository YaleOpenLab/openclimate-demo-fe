import React, { Component } from "react";
import LayoutWrapper from "../../../hoc/Layout/Layout";
import Container from "../../../hoc/Container/Container";

class UnderDevelopment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='under-development'>
                <div className="content">
                    <p className="welcome">Welcome to</p>
                    <p className="title">Learn</p>
                    <p className="condition">Work in progress</p>
                </div>
            </div>
        );
    }
}

export default UnderDevelopment;
