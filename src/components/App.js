import React, {useState} from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Main from "./Main";
import Header from "./Header";
import Calendar from "./Calendar";
import Footer from "./Footer";
import About from "./About";
import PersonalArea from "./PersonalArea";
import LoginPopup from "./LoginPopup";
import CitiesPopup from "./CitiesPopup";

function App() {
  // пока захардкодим, чтобы тестировать
  const loggedIn = true;
  
  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  function toggleModalCities() {
    setCitiesPopupOpen(!isCitiesPopupOpen);
  }
  function toggleModalLogin() {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  }

  return (
    <>
      <Header toggleModal={toggleModalLogin} />
      <div className="main">
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
      <LoginPopup toggleModal={toggleModalLogin} isOpen={isLoginPopupOpen}/>
      <CitiesPopup toggleModal={toggleModalCities} isOpen={isCitiesPopupOpen}/>
    </>
  );
}

export default withRouter(App);
