import React, { Component } from "react";
import LayoutWrapper from "../../hoc/Layout/Layout";
import Container from "../../hoc/Container/Container";

class ExplorePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LayoutWrapper>
                <Container>
                    Explore Page
                </Container>
            </LayoutWrapper>
        );
    }
}

export default ExplorePage;
