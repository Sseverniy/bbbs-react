import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <ul className='menu__list'>
      <li className='menu__list-item'>
        <NavLink exact to='/calendar' className='menu__link'>
          Календарь
        </NavLink>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/where-to-go' className='menu__link'>
          Куда пойти
        </NavLink>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/questions' className='menu__link'>
          Вопросы
        </NavLink>
      </li>
      <li className='menu__list-item menu__dropdown-item'>
        <NavLink exact to='/read-and-watch' className='menu__link'>
          Читать и смотреть
        </NavLink>
        <ul className='menu__dropdown-list'>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/directory' className='link menu__dropdown-link'>
              Справочник
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/video' className='link menu__dropdown-link'>
              Видео
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/articles' className='link menu__dropdown-link'>
              Статьи
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/films' className='link menu__dropdown-link'>
              Фильмы
            </NavLink>
          </li>
          <li className='menu__dropdown-list-item'>
            <NavLink exact to='/books' className='link menu__dropdown-link'>
              Книги
            </NavLink>
          </li>
        </ul>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/childrens-rights' className='menu__link'>
          Права детей
        </NavLink>
      </li>
      <li className='menu__list-item'>
        <NavLink exact to='/stories' className='menu__link'>
          Истории
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
