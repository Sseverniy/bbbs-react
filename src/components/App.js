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
import CalendarCaptionPopup from "./CalendarCaptionPopup";
import CalendarConfirmPopup from "./CalendarConfirmPopup";
import CalendarDonePopup from "./CalendarDonePopup";
import CitiesPopup from "./CitiesPopup";


function App() {
  // пока захардкодим, чтобы тестировать
  const loggedIn = true;
  // eslint-disable-next-line no-unused-vars
  // const [loggedIn, setLoggedIn] = useState(true);

  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  function toggleModalCities() {
    setCitiesPopupOpen(!isCitiesPopupOpen);
  }
  function toggleModalLogin() {
    setIsLoginPopupOpen(!isLoginPopupOpen);

  }

  function testButton() {
    getListCities().then(({data}) => {
      data.map((city) =>  console.log(city.name))
    })
    .catch((err) => {console.log(`Ошибка: ${err}`)})
  }

  return (
    <>
      <Header toggleModal={toggleModalLogin} loggedIn={loggedIn} />
      <div className="main">
      <button style={{background: "red"}} type="button" onClick={testButton}>ЭТО КНОПКА</button>
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
            <CalendarCaptionPopup />
            <CalendarConfirmPopup />
            <CalendarDonePopup />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <ProtectedRoute exact path="/profile" loggedIn={loggedIn} component={PersonalArea} />
        </Switch>
      </div>
      <Footer />
      <LoginPopup toggleModal={toggleModalLogin} isOpen={isLoginPopupOpen} />
      <CitiesPopup toggleModal={toggleModalCities} isOpen={isCitiesPopupOpen} />
    </>
  );
}

export default withRouter(App);
