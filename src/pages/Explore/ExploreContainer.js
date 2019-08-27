import React, { Component } from "react";
import LayoutWrapper from "../../hoc/Layout/Layout";
import ROUTES from "../../routes/routes";
import Container from "../../hoc/Container/Container";
// const menu =[
//     { name: "insights", link: ROUTES.EXPLORE_PAGES.INSIGHT },
//     { name: "learn", link: ROUTES.EXPLORE_PAGES.LEARN },
//     { name: "review", link: ROUTES.EXPLORE_PAGES.REVIEW },
// ]
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
