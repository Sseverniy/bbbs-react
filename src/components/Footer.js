import React from 'react';
import { NavLink } from 'react-router-dom';
import footerLogo from '../sourse/sass/images/svg/footer-logo.svg';

function Footer() {
  return (
    <footer className='footer'>
      <a href='./' className='footer__logo' target='_self'>
        <img className='footer__logo-image' src={footerLogo} alt='Логотип Старшие Братья Старшие Сестры России' />
      </a>
      <a
        href='https://www.nastavniki.org/campaign/pomoch-dengami/'
        className='footer__logo'
        rel='noreferrer'
        target='_blank'
      >
        <button className='button footer__button' type='button'>
          Помочь деньгами
        </button>
      </a>

      <div className='footer__column footer__column_content_concept'>
        <p className='footer__brand'>&copy; Старшие Братья Старшие Сестры</p>
        <div className='footer__copyright'>
          <p className='footer__authors'>
            Разработка – студенты&nbsp;
            <a href='https://praktikum.yandex.ru/' className='footer__production' rel='noreferrer' target='_blank'>
              Яндекс.Практикум
            </a>
          </p>
          <p className='footer__design'>
            Концепция и дизайн –&nbsp;
            <a href='https://krkr.design/' className='footer__production' rel='noreferrer' target='_blank'>
              krkr.design
            </a>
          </p>
        </div>
      </div>
      <nav className='footer__column footer__column_content_info'>
        <ul className='footer__column-list'>
          <li className='footer__column-links'>
            <NavLink exact to='/about' className='footer__column-link' target='_self'>
              о проекте
            </NavLink>
          </li>
          <li className='footer__column-links'>
            <NavLink exact to='/calendar' className='footer__column-link' target='_self'>
              календарь
            </NavLink>
          </li>
          <li className='footer__column-links'>
            <NavLink exact to='/where-to-go' className='footer__column-link' target='_self'>
              куда пойти
            </NavLink>
          </li>
          <li className='footer__column-links'>
            <NavLink exact to='/questions' className='footer__column-link' target='_self'>
              вопросы
            </NavLink>
          </li>
          <li className='footer__column-links'>
            <NavLink exact to='/read-and-watch' className='footer__column-link' target='_self'>
              читать и смотреть
            </NavLink>
          </li>
          <li className='footer__column-links'>
            <NavLink to='/childrens-rights' className='footer__column-link' target='_self'>
              права детей
            </NavLink>
          </li>
          <li className='footer__column-links'>
            <NavLink exact to='/stories' className='footer__column-link' target='_self'>
              истории
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className='footer__column footer__column_content_social'>
        <ul className='footer__column-list'>
          <li className='footer__column-links'>
            <a
              href='https://www.facebook.com/BigBrothers.BigSisters.Russia/'
              className='footer__column-link'
              rel='noreferrer'
              target='_blank'
            >
              facebook
            </a>
          </li>
          <li className='footer__column-links'>
            <a
              href='https://vk.com/big.brothers.big.sisters'
              className='footer__column-link'
              rel='noreferrer'
              target='_blank'
            >
              vkontakte
            </a>
          </li>
          <li className='footer__column-links'>
            <a
              href='https://www.instagram.com/nastavniki_org/'
              className='footer__column-link'
              rel='noreferrer'
              target='_blank'
            >
              instagram
            </a>
          </li>
          <li className='footer__column-links'>
            <a
              href='https://www.youtube.com/user/Nastavniki/'
              className='footer__column-link'
              rel='noreferrer'
              target='_blank'
            >
              youtube
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
