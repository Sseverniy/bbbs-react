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
  const [isCaptionPopupOpen, setIsCaptionPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isDonePopupOpen, setIsDonePopupOpen] = useState(false);

  function toggleModalCities() {
    setCitiesPopupOpen(!isCitiesPopupOpen);
  }
  function toggleModalLogin() {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }
  function toggleModalCaption() {
    setIsCaptionPopupOpen(!isCaptionPopupOpen);
  }
  function toggleModalConfirm() {
    if (isCaptionPopupOpen) {
      toggleModalCaption();
    }
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
  }
  function toggleModalDone() {
    if (isConfirmPopupOpen) {
      toggleModalConfirm();
    }
    setIsDonePopupOpen(!isDonePopupOpen);
  }

  return (
    <>
      <Header toggleModal={toggleModalLogin} loggedIn={loggedIn} />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path="/calendar">
            <Calendar toggleModal={toggleModalCaption} />
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
      <CalendarCaptionPopup toggleModal={toggleModalCaption} isOpen={isCaptionPopupOpen} nextPopup={toggleModalConfirm}/>
      <CalendarConfirmPopup toggleModal={toggleModalConfirm} isOpen={isConfirmPopupOpen} nextPopup={toggleModalDone}/>
      <CalendarDonePopup toggleModal={toggleModalDone} isOpen={isDonePopupOpen}/>
    </>
  );
}

export default withRouter(App);
