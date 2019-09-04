import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAuthorized from "../helpers/functions/is-authorized.js";
import ROUTES from "./routes";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthorized() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: ROUTES.ACCOUNT_PAGES.UNAUTHORIZED, state: { from: props.location } }}
          />
        )
      }
    />
  );
}
