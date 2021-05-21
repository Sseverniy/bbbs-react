import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="./index.html" className="footer__logo" target="_self">
        <img className="footer__logo-image" src="./images/svg/footer-logo.svg" alt="Логотип Старшие Братья Старшие Сестры России" />
      </a>
      <button className="button footer__button" type="button">Помочь деньгами</button>
      <div className="footer__column footer__column_content_concept">
        <p className="footer__brand">&copy; Старшие Братья Старшие Сестры</p>
        <div className="footer__copyright">
          <p className="footer__authors">Разработка – студенты
          <a href="https://praktikum.yandex.ru/" className="footer__production">Яндекс.Практикум</a>
          </p>
          <p className="footer__design">Концепция и дизайн –
          <a href="https://krkr.design/" className="footer__production">krkr.design</a>
          </p>
        </div>
      </div>
      <nav className="footer__column footer__column_content_info">
        <ul className="footer__column-list">
          <li className="footer__column-links">
            <a href="./about.html" className="footer__column-link" target="_self">о проекте</a>
          </li>
          <li className="footer__column-links">
            <a href="./calendar.html" className="footer__column-link" target="_self">календарь</a>
          </li>
          <li className="footer__column-links">
            <a href="./place.html" className="footer__column-link" target="_self">куда пойти</a>
          </li>
          <li className="footer__column-links">
            <a href="./questions.html" className="footer__column-link" target="_self">вопросы</a>
          </li>
          <li className="footer__column-links">
            <a href="./read-watch-main.html" className="footer__column-link" target="_self">читать и смотреть</a>
          </li>
          <li className="footer__column-links">
            <a href="./rights.html" className="footer__column-link" target="_self">права детей</a>
          </li>
          <li className="footer__column-links">
            <a href="./stories.html" className="footer__column-link" target="_self">истории</a>
          </li>
        </ul>
      </nav>
      <nav classNameName="footer__column footer__column_content_social">
        <ul className="footer__column-list">
          <li className="footer__column-links">
            <a href="https://www.facebook.com/BigBrothers.BigSisters.Russia/" className="footer__column-link">facebook</a>
          </li>
          <li className="footer__column-links">
            <a href="https://vk.com/big.brothers.big.sisters" className="footer__column-link">vkontakte</a>
          </li>
          <li className="footer__column-links">
            <a href="https://www.instagram.com/nastavniki_org/" className="footer__column-link">instagram</a>
          </li>
          <li className="footer__column-links">
            <a href="https://www.youtube.com/user/Nastavniki/" className="footer__column-link">youtube</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;