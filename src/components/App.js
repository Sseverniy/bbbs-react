import React, {useState} from "react";
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
import LoginPopup from "./LoginPopup";

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
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
      <LoginPopup toggleModal={toggleModal} isOpen={isOpen}/>
    </div>
  );
}

export default withRouter(App);
