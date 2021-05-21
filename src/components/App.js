import React, {useState} from "react";
import {
  withRouter,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Calendar from "./Calendar";
import LoginPopup from "./LoginPopup";
// import About from "./About"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="body">
      <Header toggleModal={toggleModal} />
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
        <LoginPopup toggleModal={toggleModal} isOpen={isOpen}/>
    </div>
  );
}

export default withRouter(App);
