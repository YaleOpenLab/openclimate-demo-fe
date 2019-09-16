import React, { Component } from "react";
import LayoutWrapper from "../../hoc/Layout/Layout";
import ROUTES from "../../routes/routes";
import SubNavigation from "../../components/Layout/Header/SubNavigation/SubNavigation";
import { Switch, Route, Redirect } from "react-router-dom";
import Learn from "./pages/Learn/Learn";
import Insights from "./pages/Insights/Insights";
import Review from "./pages/Review/Review";

const menu = [
  { name: "insights", link: ROUTES.EXPLORE_PAGES.INSIGHT },
  { name: "learn", link: ROUTES.EXPLORE_PAGES.LEARN },
  { name: "review", link: ROUTES.EXPLORE_PAGES.REVIEW_BASE }
];

class ExplorePage extends Component {
  render() {
    return (
      <LayoutWrapper>
        <SubNavigation list={menu} />
        <Switch>
          <Redirect
            from={ROUTES.EXPLORE}
            exact
            to={ROUTES.EXPLORE_PAGES.INSIGHT}
          />
          <Route path={ROUTES.EXPLORE_PAGES.INSIGHT} component={Insights} />
          <Route path={ROUTES.EXPLORE_PAGES.LEARN} component={Learn} />
          <Route path={ROUTES.EXPLORE_PAGES.REVIEW_BASE} exact component={Review} />
          <Route path={ROUTES.EXPLORE_PAGES.REVIEW} component={Review} />
        </Switch>
      </LayoutWrapper>
    );
  }
}

export default ExplorePage;
