import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route>{() => (loggedIn ? <Component {...rest}/> : <Redirect to='/' />)}</Route>
);

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
