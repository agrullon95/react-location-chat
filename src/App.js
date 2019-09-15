import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
// import LandingPage from '../Landing';
// import SignUpPage from '../SignUp';
import SignInPage from './components/SignIn';
// import PasswordForgetPage from '../PasswordForget';
import HomePage from './components/Home';
// import AccountPage from '../Account';
// import AdminPage from '../Admin';

import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <hr />

        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
