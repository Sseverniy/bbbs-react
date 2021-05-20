import React from "react";
import { Link } from "react-router-dom";

function PersonalArea() {
  return (
    <main className="main">
      <section className="personal-area page__section">
        <div className="personal-area__user-info">
          <Link
            to="/"
            className="paragraph personal-area__user-link personal-area__user-link_type_exit"
          >
            Выйти
          </Link>
        </div>
        <div className="personal-area__sign-up">
          <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
            У вас нет записи на мероприятия
          </h2>
        </div>

        <div className="personal-area__story">
          <h2 className="section-title personal-area__title">
            Составьте историю вашей дружбы с младшим. Эта страница доступна
            только вам.
          </h2>

          <article className="card-container card-container_type_personal-area">
            <div className="card personal-area__card personal-area__card_type_add-photo">
              <button
                aria-label="Кнопка добавления фотографии"
                className="personal-area__add-photo-button"
                type="button"
              />
              <p className="caption personal-area__bottom-caption">
                Загрузить фото
              </p>
            </div>
            <div className="card personal-area__card personal-area__card_type_content">
              <form
                action=""
                name="add-story-form"
                className="personal-area__form"
              >
                <input
                  type="text"
                  name="place"
                  placeholder="Место встречи"
                  required
                  className="personal-area__form-input"
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Дата&emsp;"
                  required
                  className="personal-area__form-input"
                  onChange="this.classNameName=(this.value!=''?'has-value':'')"
                />
                <textarea
                  type="text"
                  name="story"
                  className="personal-area__form-input personal-area__form-input_type_textarea"
                  placeholder="Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось"
                  required
                />

                <div className="personal-area__rating">
                  <button
                    aria-label="Кнопка оценки встречи: хорошо"
                    className="personal-area__rate personal-area__rate_type_good"
                    type="button"
                  />
                  <button
                    aria-label="Кнопка оценки встречи: удовлетворительно"
                    className="personal-area__rate personal-area__rate_type_neutral"
                    type="button"
                  />
                  <button
                    aria-label="Кнопка оценки встречи: плохо"
                    className="personal-area__rate personal-area__rate_type_bad"
                    type="button"
                  />
                  <p className="caption personal-area__rating-label">
                    Оцените проведенное время
                  </p>
                </div>

                <div className="personal-area__buttons">
                  <button
                    type="button"
                    aria-label="Кнопка удалить"
                    className="button personal-area__delete"
                  >
                    Удалить
                  </button>
                  <button className="button" type="submit" disabled>
                    Добавить
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default PersonalArea;
