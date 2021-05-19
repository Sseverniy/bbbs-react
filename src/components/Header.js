import React from 'react';

function Header() {
  return (
    <header className="header page__section">
      <nav className="menu">
        <a href="./index.html" target="_self" className="menu__logo">
          наставники.про
        </a>
        <div className="menu__lists-wrap menu__lists-wrap_hidden">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="./calendar.html" className="menu__link">
                Календарь
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./place.html" className="menu__link">
                Куда пойти
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./questions.html" className="menu__link">
                Вопросы
              </a>
            </li>
            <li className="menu__list-item menu__dropdown-item">
              <a href="./read-watch-main.html" className="menu__link">
                Читать и смотреть
              </a>
              <ul className="menu__dropdown-list">
                <li className="menu__dropdown-list-item">
                  <a href="./catalog.html" className="link menu__dropdown-link">
                    Справочник
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a href="./video.html" className="link menu__dropdown-link">
                    Видео
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a
                    href="./articles.html"
                    className="link menu__dropdown-link"
                  >
                    Статьи
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a href="./films.html" className="link menu__dropdown-link">
                    Фильмы
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a href="./books.html" className="link menu__dropdown-link">
                    Книги
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__list-item">
              <a href="./rights.html" className="menu__link">
                Права детей
              </a>
            </li>
            <li className="menu__list-item">
              <a href="./stories.html" className="menu__link">
                Истории
              </a>
            </li>
          </ul>

          <ul className="menu__list menu__list_type_social menu__list_hidden">
            <li className="menu__list-item">
              <a
                href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
                className="menu__link"
              >
                facebook
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="https://vk.com/big.brothers.big.sisters"
                className="menu__link"
              >
                vkontakte
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="https://www.instagram.com/nastavniki_org/"
                className="menu__link"
              >
                instagram
              </a>
            </li>
            <li className="menu__list-item">
              <a
                href="https://www.youtube.com/user/Nastavniki/"
                className="menu__link"
              >
                youtube
              </a>
            </li>
          </ul>
        </div>

        <button className="menu__burger" type="button">
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
        </button>

        <ul classNameName="menu__button-list">
          <li classNameName="menu__button-item">
            <form className="search" name="search-form">
              <button
                className="menu__button menu__button_type_search search__button"
                type="submit"
                aria-label="Поиск"
                title="Поиск"
              />
              <div className="search__options menu__search-options">
                <input
                  type="text"
                  name="search"
                  placeholder="Поиск"
                  value=""
                  className="search__input paragraph"
                />
                <ul className="search__option-list">
                  <li className="search__option-item">
                    <a
                      href="./article.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Причины подростковой агрессии
                    </a>
                    <a href="./article.html" className="link search__link">
                      статьи
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      href="./video.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Агрессивное поведение детей-сирот
                    </a>
                    <a href="./video.html" className="link search__link">
                      видео
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      href="./questions.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Что делать если ваш младший агрессивно себя ведет, решил
                      закрыть пару?
                    </a>
                    <a href="./questions.html" className="link search__link">
                      вопросы
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      href="./books.html"
                      className="search__title-link section-title section-title_clickable"
                    >
                      Как реагировать на агрессивное поведения ребенка
                    </a>
                    <a href="./books.html" className="link search__link">
                      книги
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </li>
          <li className="menu__button-item">
            <button
              className="menu__button menu__button_type_user"
              type="button"
              aria-label="Личный кабинет"
              title="Личный кабинет"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
