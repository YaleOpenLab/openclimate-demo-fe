import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthorized from '../helpers/functions/is-authorized.js';

export default function PrivateRoute ({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => isAuthorized()
                ? <Component {...props} {...rest}/>
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}
