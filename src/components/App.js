import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Main from "./Main";
import Header from "./Header";
import Calendar from "./Calendar";
import Footer from "./Footer";
import About from "./About";
import PersonalArea from "./PersonalArea";

function App() {
  // пока захардкодим, чтобы тестировать
  const loggedIn = true;

  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={PersonalArea}
          />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default withRouter(App);
