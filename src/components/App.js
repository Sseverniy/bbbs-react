import React from "react";
import {
  withRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Calendar from "./Calendar"
// import About from "./About"

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
        {/* <Route exact path="/about-us">
          <About />
        </Route> */}

      </Switch>
    </div>
  );
}

export default withRouter(App);
