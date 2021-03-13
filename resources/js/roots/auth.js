
{  /*  React Package */ }
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Login from './s_auth/templates/LoginPage/Login';
import Register from './s_auth/templates/RegisterPage/Register';

class Auth extends Component {
        render() {

        return (
                <Router>
                        <ScrollToTop>
                                 <Switch>
                                        {  /* Login */ }
                                        <Route exact path="/auth/sign-in" component={ Login } />

                                        {  /* Register */ }
                                        <Route exact path="/auth/register" component={ Register } />
                                </Switch>
                        </ScrollToTop>
                </Router>
            );
       }
}

export default Auth;
