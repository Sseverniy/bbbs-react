import React from 'react';
import calendarLogo from '../sourse/sass/images/svg/calendar_logo.svg'
import historyMariaAndAlina from '../sourse/sass/images/stories/Maria-and-Alina.jpg'

function MainSection() {
    return (
        <main className="name">
            <section className="lead page__section">
                <article className="card-container card-container_type_identical">
                    <article className="card card_color_green stub">
                        <div className="stub__upper-element">
                            <a href="./index.html">
                                <img src={calendarLogo} alt="Логотип Старшие Братья Старшие Сестры России" className="stub__logo" />
                            </a>
                        </div>
                        <div className="stub__content">
                            <h2 className="section-title stub__text">Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие Сестры». Созданная для поддержки наставников программы.</h2>
                        </div>
                    </article>
                    <article className="card card_content_media">
                        <img src={historyMariaAndAlina} alt="История Марины и Алины" className="card__media-img" />
                        <a href="./stories.html" className="card__media-link section-title">История Марины и Алины</a>
                    </article>
                </article>
            </section>
        </main>
    );
}

export default MainSection;
