import React from "react";
import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from "./routes/routes";
import HomePage from "./pages/homepage/homepage";
import Tool from "./pages/homepage/publicTool/tool";
import ActorPage from "./pages/actorpage";
import TradePage from "./pages/Trade/TradeContainer";
import Dashboard from "./pages/homepage/Dashboard";
import Review from "./pages/homepage/Review";
import Manage from "./pages/homepage/Manage";
import PrivateRoute from "./routes/PrivateRouter";
import ExplorePage from "./pages/Explore/ExploreContainer";
import AccountPage from "./pages/Account/AccountContainer";
import Unauthorized from "./pages/Account/pages/Unauthorized/Unauthorized";

class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from={Routes.HOME} exact to={Routes.EXPLORE} />
        <Route path={Routes.HOME} exact component={ExplorePage} />
        <Route path={Routes.EXPLORE} component={ExplorePage} />
        <Route path={Routes.ACCOUNT} component={AccountPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/tool" component={Tool} />
        <Route path="/actorpage" component={ActorPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/review" component={Review} />
        <Route path="/manage" component={Manage} />
        <Route path="/trade" component={TradePage} />
        <Route path={Routes.UNAUTHORIZED} component={Unauthorized} />
      </Switch>
    );
  }
}

export default App;
