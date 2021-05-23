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
import { getInfoProfileUsers, authorize, getListCities, getHomePage } from '../utils/api';

function App() {
  // пока захардкодим, чтобы тестировать
  // const token =
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIwNTM4OTMzLCJqdGkiOiIwOWZlNWUxNmI1MjI0YmM3ODJiYTc1YmM1OWExZWUzZSIsInVzZXJfaWQiOjF9._cDyG8Vp2HWzPPp-Hrm-P5FD5P0zcywVd4o4Gt2FL2M';
  // localStorage.setItem('access', token);

  const [loggedIn, setLoggedIn] = useState(false);
  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  // попапы календаря
  const [isCaptionPopupOpen, setIsCaptionPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isDonePopupOpen, setIsDonePopupOpen] = useState(false);

  const [listOfCities, setListOfCities] = useState([]);
  // стейты главной страницы
  const [historyMain, setHistoryMain] = useState({});
  const [placeMain, setPlaceMain] = useState({});
  const [videoMain, setVideoMain] = useState({});
  const [moviesMain, setMoviesMain] = useState([]);
  const [questionsMain, setQuestionsMain] = useState([]);
  const [articlesMain, setArticlesMain] = useState([]);

  function toggleModalCities() {
    setCitiesPopupOpen(!isCitiesPopupOpen);
  }
  function toggleModalLogin() {
    if (loggedIn === false) {
      setIsLoginPopupOpen(!isLoginPopupOpen);
    }
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

  const handleGetMain = () => {
    getHomePage().then((data) => {
      console.log(data);
      setHistoryMain(data.data.history);
      setPlaceMain(data.data.place);
      setVideoMain(data.data.video);
      setMoviesMain(data.data.movies);
      setQuestionsMain(data.data.questions);
      setArticlesMain(data.data.articles);
    });
  };

  useEffect(() => {
    const access = localStorage.getItem('access');
    if (access) {
      handleTokenCheck(access);
    }
  }, []);

  useEffect(() => {
    getListCities()
      .then((data) => {
        setListOfCities(data.data);
      })
      .catch(() => {
        console.log('Ошибка загрузки городов');
      });
  }, []);

  useEffect(() => {
    handleGetMain();
  }, []);

  return (
    <>
      <Header toggleModal={toggleModalLogin} loggedIn={loggedIn} />
      <div className='main'>
        <Switch>
          <Route exact path='/'>
            <Main
              loggedIn={loggedIn}
              history={historyMain}
              place={placeMain}
              video={videoMain}
              movies={moviesMain}
              questions={questionsMain}
              articles={articlesMain}
            />
          </Route>
          <Route exact path='/calendar'>
            <Calendar toggleModal={toggleModalCaption} />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <ProtectedRoute exact path='/profile' loggedIn={loggedIn} component={PersonalArea} />
        </Switch>
      </div>
      <Footer />
      <LoginPopup toggleModal={toggleModalLogin} isOpen={isLoginPopupOpen} onLogin={handleLogin} />
      <CitiesPopup toggleModal={toggleModalCities} isOpen={isCitiesPopupOpen} cities={listOfCities} />
      <CalendarCaptionPopup
        toggleModal={toggleModalCaption}
        isOpen={isCaptionPopupOpen}
        nextPopup={toggleModalConfirm}
      />
      <CalendarConfirmPopup toggleModal={toggleModalConfirm} isOpen={isConfirmPopupOpen} nextPopup={toggleModalDone} />
      <CalendarDonePopup toggleModal={toggleModalDone} isOpen={isDonePopupOpen} />
      <CitiesPopup toggleModal={toggleModalCities} cities={listOfCities} isOpen={isCitiesPopupOpen} />
    </>
  );
}

export default withRouter(App);
