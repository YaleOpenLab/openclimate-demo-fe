import React, { Component } from "react";
import LayoutWrapper from "../../hoc/Layout/Layout";
import ROUTES from "../../routes/routes";

class ExplorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                { name: "insights", link: ROUTES.EXPLORE_PAGES.INSIGHT },
                { name: "learn", link: ROUTES.EXPLORE_PAGES.LEARN },
                { name: "review", link: ROUTES.EXPLORE_PAGES.REVIEW },
            ]
        };
    }

    render() {
        return (
            <LayoutWrapper>
                <div className="Explore">
                    Content Goes Here
                </div>
            </LayoutWrapper>
        );
    }
}

export default ExplorePage;
