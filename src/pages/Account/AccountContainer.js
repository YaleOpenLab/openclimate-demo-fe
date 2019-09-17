import React, { Component } from "react";
import LayoutWrapper from "../../hoc/Layout/Layout";
import ROUTES from "../../routes/routes";
import SubNavigation from "../../components/Layout/Header/SubNavigation/SubNavigation";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Manage from "./pages/Manage/Manage";
import View from "./pages/View/View";
import Review from "./pages/Review/Review";
import PrivateRoute from "../../routes/PrivateRouter";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import isAuthorized from "../../helpers/functions/is-authorized";
import Register from "./pages/Register/Register";

const menu = [
  { name: "dashboard", link: ROUTES.ACCOUNT_PAGES.DASHBOARD },
  { name: "view", link: ROUTES.ACCOUNT_PAGES.VIEW },
  { name: "review", link: ROUTES.ACCOUNT_PAGES.REVIEW },
  { name: "manage", link: ROUTES.ACCOUNT_PAGES.MANAGE }
];

class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LayoutWrapper>
        <SubNavigation list={isAuthorized() ? menu : []} />
        <Switch>
          <Redirect
            from={ROUTES.ACCOUNT}
            exact
            to={ROUTES.ACCOUNT_PAGES.DASHBOARD}
          />
          <PrivateRoute
            path={ROUTES.ACCOUNT_PAGES.DASHBOARD}
            component={Dashboard}
          />
          <PrivateRoute path={ROUTES.ACCOUNT_PAGES.VIEW} component={View} />
          <PrivateRoute path={ROUTES.ACCOUNT_PAGES.REVIEW} component={Review} />
          <PrivateRoute path={ROUTES.ACCOUNT_PAGES.MANAGE} component={Manage} />
          <Route
            path={ROUTES.ACCOUNT_PAGES.UNAUTHORIZED}
            component={Unauthorized}
          />
          <Route
            path={ROUTES.ACCOUNT_PAGES.REGISTER}
            component={Register}
          />
        </Switch>
      </LayoutWrapper>
    );
  }
}

export default AccountPage;
