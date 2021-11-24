
{  /*  React Package */ }
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { lazy } from '@loadable/component';

{  /*  Templates */  }
const Login  = lazy(() => import('./s_auth/templates/LoginPage/Login'));
const Register = lazy(() => import('./s_auth/templates/RegisterPage/Register'));

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
