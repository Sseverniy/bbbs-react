import React from 'react';
import twoGirls from '../sourse/sass/images/where-to-go/two-girls-on-the-beach.jpg'

function WhereToGo() {
    return (
        <section className="main-section page__section">
            <article className="card-container card-container_type_main-article">
                <div className="card card_type_main card_color_yellow">
                    <p className="rubric card__rubric">Выбор наставника</p>
                    <div className="card__title-wrap">
                        <a href="./place.html" className="card__link-wrap">
                            <h2 className="section-title card__title">Сплав на байдарках в 2 строки</h2>
                        </a>
                        <p className="caption card__title-caption">усадьба Архангельское в две строки</p>
                    </div>
                    <a href="./place.html" className="card__link-wrap card__link-wrap_content_article-img">
                        <img src={twoGirls} alt="Сплав на байдарках" className="card__img" />
                    </a>
                    <a href="123" className="link card__link">перейти на сайт</a>
                </div>
                <div className="card card_content_annotation card_type_main">
                    <div className="card__content">
                        <p className="caption card__annotation-caption">Девочка, 10 лет. Активный</p>
                        <div className="card__annotation card__annotation_position_main-card">
                            <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать друг друга,  потом понимать чуть лучше и,</p>
                            <p className="paragraph card__paragraph">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется.</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default WhereToGo;