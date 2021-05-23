import React from "react";
import { Helmet } from 'react-helmet';
import mentorIcon from "../sourse/sass/images/svg/calendar_logo.svg";

function About() {
  return (
    <main className="main">
      <Helmet>
        <title>О нас</title>
        <meta name="description" content="Описание и главная информация об организации Старшие Братья Старшие Сёстры"/>
        <meta name="keywords" content="Старшие Братья Старшие Сёстры"/>
      </Helmet>
      <section className="about page__section">
        <h3 className="chapter-title about__title">
          Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие Сестры». Созданная для поддержки наставников
          программы.
        </h3>
        <img src={mentorIcon} alt="Логотип наставники.про" className="about__logo" />

        <div className="about__us">
          <div className="card card_color_yellow about__circle">
            <h2 className="section-title">Об организации</h2>
          </div>
          <article className="card card_content_annotation about__caption">
            <div className="card__content">
              <div className="card__annotation">
                <p className="paragraph about__main-text">
                  «Старшие Братья Старшие Сестры» — межрегиональная общественная организация содействия воспитанию подрастающего поколения. Мы
                  поддерживаем детей, которым требуется внимание: оставшихся без попечения родителей, приемных, детей из неполных, многодетных или
                  неблагополучных семей, детей с ограниченными возможностями.
                </p>
                <p className="paragraph about__main-text">
                  Любому человеку, тем более ребенку, необходимо общение. Без него дети растут неуверенными и замкнутыми. Одиночество токсично, а
                  самое надежное противоядие – дружба.
                </p>
                <p className="paragraph about__main-text">
                  Мы помогаем детям, которым не хватает поддержки взрослого друга, «Младшим». Таким другом становится наш волонтер, «Старший». Он
                  принимает ребенка, какой он есть, поддерживает, помогает раскрыть потенциал, почувствовать уверенность в своих силах, узнать
                  элементарные вещи о жизни, адаптироваться и полноценно участвовать в жизни общества.
                </p>
              </div>
            </div>
          </article>
        </div>

        <blockquote className="about__quote">
          <h3 className="chapter-title about__quote-text">Мы хотим, чтобы наставник был у каждого ребенка, который в нем нуждается</h3>
        </blockquote>

        <div className="about__cards">
          <article className="card-container about__card-container">
            <div className="card card_color_blue about__card">
              <h2 className="section-title">Пожертвования</h2>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content about__card-content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Деньги пойдут на оплату работы кураторов программы (профессиональные психологи/социальные работники), которые поддерживают дружбу
                    между ребенком и наставником.
                  </p>
                </div>
              </div>
              <a
                href="https://www.nastavniki.org/campaign/pomoch-dengami/"
                target="_blank"
                rel="noreferrer"
                className="link card__link about__card-link"
              >
                сделать пожертвование
              </a>
            </div>
          </article>

          <article className="card-container about__card-container">
            <div className="card card_color_pink about__card">
              <h2 className="section-title">Наставничество</h2>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content about__card-content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Наставник «Старшие Братья Старшие Сестры» — значимый взрослый, который становится для ребенка старшим другом, ролевой моделью,
                    принимает своего «Младшего» таким, какой он есть. «Старший» открывает для ребенка дверь в большой мир и дарит ему надежду на более
                    счастливое и успешное будущее.
                  </p>
                </div>
              </div>
              <a href="https://www.nastavniki.org" target="_blank" rel="noreferrer" className="link card__link about__card-link">
                подробнее
              </a>
            </div>
          </article>

          <article className="card-container about__card-container">
            <div className="card card_color_green about__card">
              <h2 className="section-title">Партнерство</h2>
            </div>
            <div className="card card_content_annotation">
              <div className="card__content about__card-content">
                <div className="card__annotation">
                  <p className="paragraph card__paragraph">
                    Компании поддерживают нас не только деньгами, но и делами. Мы собрали все возможные способы поддержки и сотрудничества:
                    профессиональная помощь Pro Bono, организационная помощь, корпоративное волонтерство, мастер-классы, лекции, учебные программы.
                  </p>
                </div>
              </div>
              <a href="https://www.nastavniki.org" target="_blank" rel="noreferrer" className="link card__link about__card-link">
                подробнее
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
export default About;
