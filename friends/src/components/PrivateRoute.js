import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function PrivateRoute({component: FriendsList, ...rest}) {
    return (
        
            <Route {...rest}
            render={props => 
            localStorage.getItem('token') ? (
                <FriendsList {...props} />
            ) : (
                <Redirect to="/login"/>
            )
            } />
    )
}

export default PrivateRoute