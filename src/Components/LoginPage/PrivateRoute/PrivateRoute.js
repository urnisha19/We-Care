import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //to check authenticated user or not

    return (
        <Route {...rest}
            render={({ location }) => loggedInUser.email ?
                (children)
                :
                (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
            }
        />
    );
};

export default PrivateRoute;