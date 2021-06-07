import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavBar({ loggedIn, location }) {
  const myCitieWrap = (
    <li className='menu__list-item'>
      <div className='personal-area__user-info-wrap'>
        <p className='paragraph personal-area__user-link personal-area__user-link_type_city'>{`Москва. `}</p>
        <button
          type='button'
          className='paragraph personal-area__user-link personal-area__user-link_type_exit personal-area__button-top'
        >
          Изменить город
        </button>
      </div>
    </li>
  );

  const locationCalendarWrap = () => {
    if (loggedIn) {
      if (location === '/calendar') {
        return myCitieWrap;
      }
    }
    return '';
  };
  const locationWhereToGoWrap = () => {
    if (loggedIn) {
      if (location === '/where-to-go') {
        return myCitieWrap;
      }
    }
    return '';
  };

  return (
    <ul className='menu__list'>
      <li className='menu__list-item'>
        <NavLink exact to='/calendar' className='menu__link' activeClassName='menu__list-item_active'>
          Календарь
        </NavLink>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/where-to-go' className='menu__link' activeClassName='menu__list-item_active'>
          Куда пойти
        </NavLink>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/questions' className='menu__link' activeClassName='menu__list-item_active'>
          Вопросы
        </NavLink>
      </li>
      <li className='menu__list-item menu__dropdown-item'>
        <NavLink exact to='/read-and-watch' className='menu__link' activeClassName='menu__list-item_active'>
          Читать и смотреть
        </NavLink>
        <ul className='menu__dropdown-list'>
          <li className='menu__dropdown-list-item'>
            <NavLink
              exact
              to='/directory'
              className='link menu__dropdown-link'
              activeClassName='menu__list-item_active'
            >
              Справочник
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/video' className='link menu__dropdown-link' activeClassName='menu__list-item_active'>
              Видео
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/articles' className='link menu__dropdown-link' activeClassName='menu__list-item_active'>
              Статьи
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/films' className='link menu__dropdown-link' activeClassName='menu__list-item_active'>
              Фильмы
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/books' className='link menu__dropdown-link' activeClassName='menu__list-item_active'>
              Книги
            </NavLink>
          </li>
        </ul>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/childrens-rights' className='menu__link' activeClassName='menu__list-item_active'>
          Права детей
        </NavLink>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/stories' className='menu__link' activeClassName='menu__list-item_active'>
          Истории
        </NavLink>
      </li>
      {locationCalendarWrap()}
      {locationWhereToGoWrap()}
    </ul>
  );
}
NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};
export default NavBar;
