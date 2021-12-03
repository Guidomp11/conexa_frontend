import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({component: Component, ...props}) => {

    const { user } = useSelector((state) => state.auth);

    return(
        <Route 
            {...props}
            render={(props) => !user ? <Component {...props} /> : <Redirect to="/" />}
        />
    )
}

export default PublicRoute;