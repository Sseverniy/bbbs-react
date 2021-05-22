import React, { useState, useEffect } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Main from './Main';
import Header from './Header';
import Calendar from './Calendar';
import Footer from './Footer';
import About from './About';
import PersonalArea from './PersonalArea';
import LoginPopup from './LoginPopup';
import CalendarCaptionPopup from './CalendarCaptionPopup';
import CalendarConfirmPopup from './CalendarConfirmPopup';
import CalendarDonePopup from './CalendarDonePopup';
import CitiesPopup from './CitiesPopup';
import { getInfoProfileUsers, authorize } from '../utils/api';

function App() {
  // пока захардкодим, чтобы тестировать
  // const token =
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIwNTM4OTMzLCJqdGkiOiIwOWZlNWUxNmI1MjI0YmM3ODJiYTc1YmM1OWExZWUzZSIsInVzZXJfaWQiOjF9._cDyG8Vp2HWzPPp-Hrm-P5FD5P0zcywVd4o4Gt2FL2M';
  // localStorage.setItem('access', token);

  const [loggedIn, setLoggedIn] = useState(false);
  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  function toggleModalCities() {
    setCitiesPopupOpen(!isCitiesPopupOpen);
  }
  function toggleModalLogin() {
    if (loggedIn === false) {
      setIsLoginPopupOpen(!isLoginPopupOpen);
    }
  }

  function handleTokenCheck(access) {
    getInfoProfileUsers(access)
      .then(({ data }) => {
        if (data) {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleLogin = (dataInput) => {
    const { login, password } = dataInput;
    return authorize(login, password)
      .then((data) => {
        if (data.data.access) {
          setLoggedIn(true);
          localStorage.setItem('access', data.access);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const access = localStorage.getItem('access');
    if (access) {
      handleTokenCheck(access);
    }
  }, []);

  return (
    <>
      <Header toggleModal={toggleModalLogin} loggedIn={loggedIn} />
      <div className='main'>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path='/calendar'>
            <Calendar />
            <CalendarCaptionPopup />
            <CalendarConfirmPopup />
            <CalendarDonePopup />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <ProtectedRoute exact path='/profile' loggedIn={loggedIn} component={PersonalArea} />
        </Switch>
      </div>
      <Footer />
      <LoginPopup toggleModal={toggleModalLogin} isOpen={isLoginPopupOpen} onLogin={handleLogin} />
      <CitiesPopup toggleModal={toggleModalCities} isOpen={isCitiesPopupOpen} />
    </>
  );
}

export default withRouter(App);
