import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

function Header({ toggleModal, loggedIn }) {
  const [burgerClick, setBurgerClick] = useState(false);
  const [burgerWrap, setBurgerWrap] = useState(true);
  const [menuListHidden, setMenuListHidden] = useState(true);
  const [searchButton, setSearchButton] = useState(false);
  const [viewHeader, setViewHeader] = useState(false);

  let prevScrollpos = window.pageYOffset;

  const hendleBurgerClick = () => {
    if (burgerClick === true) {
      setBurgerClick(false);
      setBurgerWrap(true);
      setMenuListHidden(true);
    } else {
      setBurgerClick(true);
      setBurgerWrap(false);
      setMenuListHidden(false);
      setSearchButton(false);
    }
  };

  const hendleSearchButton = (e) => {
    e.preventDefault();
    if (searchButton === true) {
      setSearchButton(false);
    } else {
      setSearchButton(true);
      setBurgerClick(false);
      setBurgerWrap(true);
      setMenuListHidden(true);
    }
  };

  // отслеживаем скролл для скрытия/появления NavBara
  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setViewHeader(false);
      } else {
        setViewHeader(true);
        setBurgerClick(false);
        setBurgerWrap(true);
        setMenuListHidden(true);
        setSearchButton(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <header
      className={`header ${burgerClick === true ? 'heder_displayed' : ''} page__section ${
        viewHeader === true ? 'header_view' : ''
      }`}
    >
      <nav className={`menu ${searchButton === true ? 'menu_state_search' : ''}`}>
        <NavLink exact to='/' target='_self' className='menu__logo'>
          наставники.про
        </NavLink>
        <div className={`menu__lists-wrap ${burgerWrap === true ? 'menu__lists-wrap_hidden' : ''}`}>
          <NavBar />
          <ul className={`menu__list menu__list_type_social ${menuListHidden === true ? 'menu__list_hidden' : ''}`}>
            <li className='menu__list-item'>
              <a href='https://www.facebook.com/BigBrothers.BigSisters.Russia/' className='menu__link'>
                facebook
              </a>
            </li>
            <li className='menu__list-item'>
              <a href='https://vk.com/big.brothers.big.sisters' className='menu__link'>
                vkontakte
              </a>
            </li>
            <li className='menu__list-item'>
              <a href='https://www.instagram.com/nastavniki_org/' className='menu__link'>
                instagram
              </a>
            </li>
            <li className='menu__list-item'>
              <a href='https://www.youtube.com/user/Nastavniki/' className='menu__link'>
                youtube
              </a>
            </li>
          </ul>
        </div>

        <button
          className={`menu__burger ${burgerClick === true ? 'menu__burger_active' : ''}`}
          type='button'
          onClick={hendleBurgerClick}
        >
          <span className='menu__burger-line' />
          <span className='menu__burger-line' />
          <span className='menu__burger-line' />
        </button>

        <ul className='menu__button-list'>
          <li className='menu__button-item'>
            <form className='search' name='search-form'>
              <button
                className='menu__button menu__button_type_search search__button'
                type='submit'
                aria-label='Поиск'
                title='Поиск'
                onClick={hendleSearchButton}
              />
              <div
                className={`search__options menu__search-options ${
                  searchButton === true ? 'search__options_visible' : ''
                }`}
              >
                <input type='text' name='search' placeholder='Поиск' className='search__input paragraph' />
                <ul className='search__option-list'>
                  <li className='search__option-item'>
                    <a href='./article.html' className='search__title-link section-title section-title_clickable'>
                      Причины подростковой агрессии
                    </a>
                    <a href='./article.html' className='link search__link'>
                      статьи
                    </a>
                  </li>
                  <li className='search__option-item'>
                    <a href='./video.html' className='search__title-link section-title section-title_clickable'>
                      Агрессивное поведение детей-сирот
                    </a>
                    <a href='./video.html' className='link search__link'>
                      видео
                    </a>
                  </li>
                  <li className='search__option-item'>
                    <a href='./questions.html' className='search__title-link section-title section-title_clickable'>
                      Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?
                    </a>
                    <a href='./questions.html' className='link search__link'>
                      вопросы
                    </a>
                  </li>
                  <li className='search__option-item'>
                    <a href='./books.html' className='search__title-link section-title section-title_clickable'>
                      Как реагировать на агрессивное поведения ребенка
                    </a>
                    <a href='./books.html' className='link search__link'>
                      книги
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </li>
          <li className='menu__button-item'>
            <button
              className={`menu__button ${
                loggedIn === true ? 'menu__button_type_active-user' : ' menu__button_type_user'
              }`}
              onClick={toggleModal}
              type='button'
              aria-label='Личный кабинет'
              title='Личный кабинет'
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Header;
