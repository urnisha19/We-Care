import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const email = JSON.parse(localStorage.getItem("email"));

    return (
        <Route {...rest}
            render={({ location }) => email ?
                (children)
                :
                (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
            }
        />
    );
};

export default PrivateRoute;