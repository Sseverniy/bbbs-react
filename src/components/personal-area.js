<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="./images/favicon/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="css/style.css">
  <title>Личный кабинет</title>
</head>
<body class="page">
  <header class="header page__section">
    <nav class="menu">
      <a href="./index.html" target="_self" class="menu__logo">наставники.про</a>
      <div class="menu__lists-wrap menu__lists-wrap_hidden">
        <ul class="menu__list">
          <li class="menu__list-item">
            <a href="./calendar.html" class="menu__link">Календарь</a>
          </li>
          <li class="menu__list-item">
            <a href="./place.html" class="menu__link">Куда пойти</a>
          </li>
          <li class="menu__list-item">
            <a href="./questions.html" class="menu__link">Вопросы</a>
          </li>
          <li class="menu__list-item menu__dropdown-item">
            <a href="./read-watch-main.html" class="menu__link">Читать и смотреть</a>
            <ul class="menu__dropdown-list">
              <li class="menu__dropdown-list-item">
                <a href="./catalog.html" class="link menu__dropdown-link">Справочник</a>
              </li>
              <li class="menu__dropdown-list-item">
                <a href="./video.html" class="link menu__dropdown-link">Видео</a>
              </li>
              <li class="menu__dropdown-list-item">
                <a href="./articles.html" class="link menu__dropdown-link">Статьи</a>
              </li>
              <li class="menu__dropdown-list-item">
                <a href="./films.html" class="link menu__dropdown-link">Фильмы</a>
              </li>
              <li class="menu__dropdown-list-item">
                <a href="./books.html" class="link menu__dropdown-link">Книги</a>
              </li>
            </ul>
          </li>
          <li class="menu__list-item">
            <a href="./rights.html" class="menu__link">Права детей</a>
          </li>
          <li class="menu__list-item">
            <a href="./stories.html" class="menu__link">Истории</a>
          </li>
        </ul>

        <ul class="menu__list menu__list_type_social menu__list_hidden">
          <li class="menu__list-item">
            <a href="https://www.facebook.com/BigBrothers.BigSisters.Russia/" class="menu__link" target="_blank">facebook</a>
          </li>
          <li class="menu__list-item">
            <a href="https://vk.com/big.brothers.big.sisters" class="menu__link" target="_blank">vkontakte</a>
          </li>
          <li class="menu__list-item">
            <a href="https://www.instagram.com/nastavniki_org/" class="menu__link" target="_blank">instagram</a>
          </li>
          <li class="menu__list-item">
            <a href="https://www.youtube.com/user/Nastavniki/" class="menu__link" target="_blank">youtube</a>
          </li>
        </ul>
      </div>

      <button class="menu__burger" type="button">
        <span class="menu__burger-line"></span>
        <span class="menu__burger-line"></span>
        <span class="menu__burger-line"></span>
      </button>

      <ul class="menu__button-list">
        <li class="menu__button-item">
          <form class="search" name="search-form">
            <button class="menu__button menu__button_type_search search__button" type="submit" aria-label="Поиск" title="Поиск"></button>
            <div class="search__options menu__search-options">
              <input type="text" name="search" placeholder="Поиск" value="" class="search__input paragraph">
              <ul class="search__option-list">
                <li class="search__option-item">
                  <a href="./article.html" class="search__title-link section-title section-title_clickable">Причины подростковой агрессии</a>
                  <a href="./article.html" class="link search__link">статьи</a>
                </li>
                <li class="search__option-item">
                  <a href="./video.html" class="search__title-link section-title section-title_clickable">Агрессивное поведение детей-сирот</a>
                  <a href="./video.html" class="link search__link">видео</a>
                </li>
                <li class="search__option-item">
                  <a href="./questions.html" class="search__title-link section-title section-title_clickable">Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?</a>
                  <a href="./questions.html" class="link search__link">вопросы</a>
                </li>
                <li class="search__option-item">
                  <a href="./books.html" class="search__title-link section-title section-title_clickable">Как реагировать на агрессивное поведения ребенка</a>
                  <a href="./books.html" class="link search__link">книги</a>
                </li>
              </ul>
            </div>
          </form>
        </li>
        <li class="menu__button-item">
          <button class="menu__button menu__button_type_active-user" type="button" aria-label="Личный кабинет" title="Личный кабинет"></button>
        </li>
      </ul>
    </nav>
  </header>

  <main class="main">
    <section class="personal-area page__section">
      <div class="personal-area__user-info">
        <a href="#" class="paragraph personal-area__user-link personal-area__user-link_type_city">Изменить город</a>
        <a href="#" class="paragraph personal-area__user-link personal-area__user-link_type_exit">Выйти</a>
      </div>

      <div class="personal-area__sign-up">
        <h2 class="section-title personal-area__title personal-area__title_type_sign-up">У вас нет записи на мероприятия</h2>
      </div>

      <div class="personal-area__story">
        <h2 class="section-title personal-area__title">Составьте историю вашей дружбы с младшим. Эта страница доступна только вам.</h2>


        <article class="card-container card-container_type_personal-area">
          <div class="card personal-area__card personal-area__card_type_add-photo">
            <button class="personal-area__add-photo-button" type="button"></button>
            <p class="caption personal-area__bottom-caption">Загрузить фото</p>
          </div>
          <div class="card personal-area__card personal-area__card_type_content">
            <form action="" name="add-story-form" class="personal-area__form">
              <input type="text" name="place" placeholder="Место встречи" required class="personal-area__form-input">
              <input type="date" name="date" placeholder="Дата&emsp;" required class="personal-area__form-input" onchange="this.className=(this.value!=''?'has-value':'')">
              <textarea type="text" name="story" class="personal-area__form-input personal-area__form-input_type_textarea" placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось" required></textarea>

              <div class="personal-area__rating">
                <button class="personal-area__rate personal-area__rate_type_good" type="button"></button>
                <button class="personal-area__rate personal-area__rate_type_neutral" type="button"></button>
                <button class="personal-area__rate personal-area__rate_type_bad" type="button"></button>
                <p class="caption personal-area__rating-label">Оцените проведенное время</p>
              </div>

              <div class="personal-area__buttons">
                <button class="button personal-area__delete" type="reset">Удалить</button>
                <button class="button" type="submit" disabled>Добавить</button>
              </div>
            </form>
          </div>
        </article>

        <article class="card-container card-container_type_personal-area">
          <div class="card card_content_media">
            <img src="./images/personal-area/lk.png" alt="Катя" class="personal-area__photo">
          </div>
          <div class="card personal-area__card personal-area__date-container">
            <div class="personal-area__text-wrap">
              <h2 class="section-title personal-area__card-title">Парк Горького</h2>
              <p class="paragraph">
                Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. Описание в несколько срок. Подробное описание. Подробное описание.
                Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось.  Описание в несколько срок. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось
                не понравилось. Описание в несколько срок. Подробное описание. Подробное описание. Опишите вашу встречу, какие чувства вы испытывали, что понравилось не понравилось. чувства вы испытывали, что понравилось не понравилось.
              </p>
            </div>
            <div class="personal-area__card-date">
              <p class="personal-area__card-weekday">декабрь, 2020</p>
              <p class="personal-area__card-day">05</p>
            </div>
            <div class="personal-area__actions">
              <div class="personal-area__rating">
                <button class="personal-area__rate personal-area__rate_type_active-good" type="button"></button>
                <p class="caption personal-area__rating-label personal-area__rating-label_type_good">Было классно</p>
              </div>

              <div class="personal-area__action-elements">
                <p class="caption personal-area__opened-info">Открыто Александре К.</p>
                <button class="caption personal-area__button personal-area__button_action_edit-card">Редактировать</button>
                <button class="caption personal-area__button personal-area__button_action_delete-card" type="button">Удалить</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>

  <footer class="footer">
    <a href="./index.html" class="footer__logo" target="_self">
      <img class="footer__logo-image" src="./images/svg/footer-logo.svg" alt="Логотип Старшие Братья Старшие Сестры России">
    </a>
    <button class="button footer__button" type="button">Помочь деньгами</button>
    <div class="footer__column footer__column_content_concept">
      <p class="footer__brand">&copy; Старшие Братья Старшие Сестры</p>
      <div class="footer__copyright">
        <p class="footer__authors">Разработка – студенты
          <a href="https://praktikum.yandex.ru/" class="footer__production" target="_blank">Яндекс.Практикум</a>
        </p>
        <p class="footer__design">Концепция и дизайн –
          <a href="https://krkr.design/" class="footer__production" target="_blank">krkr.design</a>
        </p>
      </div>
    </div>
    <nav class="footer__column footer__column_content_info">
      <ul class="footer__column-list">
        <li class="footer__column-links">
          <a href="./about.html" class="footer__column-link" target="_self">о проекте</a>
        </li>
        <li class="footer__column-links">
          <a href="./calendar.html" class="footer__column-link" target="_self">календарь</a>
        </li>
        <li class="footer__column-links">
          <a href="./place.html" class="footer__column-link" target="_self">куда пойти</a>
        </li>
        <li class="footer__column-links">
          <a href="./questions.html" class="footer__column-link" target="_self">вопросы</a>
        </li>
        <li class="footer__column-links">
          <a href="./read-watch-main.html" class="footer__column-link" target="_self">читать и смотреть</a>
        </li>
        <li class="footer__column-links">
          <a href="./rights.html" class="footer__column-link" target="_self">права детей</a>
        </li>
        <li class="footer__column-links">
          <a href="./stories.html" class="footer__column-link" target="_self">истории</a>
        </li>
      </ul>
    </nav>
    <nav class="footer__column footer__column_content_social">
      <ul class="footer__column-list">
        <li class="footer__column-links">
          <a href="https://www.facebook.com/BigBrothers.BigSisters.Russia/" class="footer__column-link" target="_blank">facebook</a>
        </li>
        <li class="footer__column-links">
          <a href="https://vk.com/big.brothers.big.sisters" class="footer__column-link" target="_blank">vkontakte</a>
        </li>
        <li class="footer__column-links">
          <a href="https://www.instagram.com/nastavniki_org/" class="footer__column-link" target="_blank">instagram</a>
        </li>
        <li class="footer__column-links">
          <a href="https://www.youtube.com/user/Nastavniki/" class="footer__column-link" target="_blank">youtube</a>
        </li>
      </ul>
    </nav>
  </footer>

  <div class="popup personal">
    <div class="popup__container popup__container_type_lk">
      <h2 class="section-title personal__title">Удалить встречу в Парке Горького 5 декабря 2020?</h2>
      <div class="popup__buttons">
        <button class="button popup__delete" type="button" disabled>Удалить</button>
        <button class="button popup__delete" type="button">Отмена</button>
      </div>
    </div>
  </div>

  <div class="popup pupup_type_cities cities">
    <div class="popup__container popup__container_type_cities">
      <h2 class="cities__title section-title">Выберите ваш город</h2>
      <ul class="cities__capitals">
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Москва</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Санкт-Петербург</a></li>
      </ul>
      <ul class="cities__region">
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Алексин</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Барнаул</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Екатеринбург</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Зубцов</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Калининград</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Киреевск</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Коломна</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Новомосковск</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Орехово-Зуево</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Тверь</a></li>
        <li class="cities__name"><a href="#" target="_self" class="cities__link">Тула</a></li>
      </ul>
    </div>
  </div>

  <script src="./scripts/cities/cities-lk.js"></script>
  <script src="./scripts/personal/personal.js"></script>
  <script src="./scripts/script.js"></script>
</body>
</html>
