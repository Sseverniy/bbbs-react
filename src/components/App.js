import React from "react";
import {
  withRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Calendar from "./Calendar"
import About from "./About"
import Footer from "./Footer"

function App() {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
