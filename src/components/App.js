import React, { useState } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Main from "./Main";
import Header from "./Header";
import Calendar from "./Calendar";
import Footer from "./Footer";
import About from "./About";
import PersonalArea from "./PersonalArea";
import LoginPopup from "./LoginPopup";
import { getListCities } from "../utils/api";

function App() {
  // пока захардкодим, чтобы тестировать
  const loggedIn = true;

  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function testButton() {
    getListCities().then((res) => {
      res.data.map((city) =>  console.log(city.name))
    })
    .catch((err) => {console.log(`Ошибка: ${err}`)})
  }

  return (
    <>
      <Header toggleModal={toggleModal} />
      <div className="main">
      <button style={{background: "red"}} type="button" onClick={testButton}>ЭТО КНОПКА</button>
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
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={PersonalArea}
          />
        </Switch>
      </div>
      <Footer />
      <LoginPopup toggleModal={toggleModal} isOpen={isOpen} />
    </>
  );
}

export default withRouter(App);
