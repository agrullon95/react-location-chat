import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
// import LandingPage from '../Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
// import PasswordForgetPage from '../PasswordForget';
import HomePage from './components/Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import * as ROUTES from './constants/routes';
import { withFirebase } from './components/Firebase';
import { withAuthentication } from './components/Session';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.HOME} component={HomePage} />

        </main>
        <footer></footer>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
