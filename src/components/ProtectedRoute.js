/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, loggedIn}) => {
  return (
    <Route>
      {()=> loggedIn ? <Component /> : <Redirect to="./sign-in" />}
    </Route>
)};

export default ProtectedRoute;