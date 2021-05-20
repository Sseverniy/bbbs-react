import React from 'react';
import videoPrev from '../sourse/sass/images/video/video-prev.png'

function Films() {
    return (
        <section className="main-section page__section cards-grid cards-grid_content_small-cards">
            <article className="card card_content_video card-pagination_page_main">
                <div className="video">
                    <a href="./films.html" className="card__link-wrap">
                        <img src={videoPrev} alt="Превью видео" className="video__img" />
                        <ul className="video__rubric-list">
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                        </ul>
                    </a>
                </div>
                <div className="card__video-info">
                    <div className="card__title-wrap">
                        <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                        <p className="caption card__title-caption">Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
                    </div>
                    <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
                </div>
            </article>

            <article className="card card_content_video card-pagination_page_main">
                <div className="video">
                    <a href="./films.html" className="card__link-wrap">
                        <img src={videoPrev} alt="Превью видео" className="video__img" />
                        <ul className="video__rubric-list">
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                        </ul>
                    </a>
                </div>
                <div className="card__video-info">
                    <div className="card__title-wrap">
                        <h2 className="section-title card__title">Жизнь Кабачка</h2>
                        <p className="caption card__title-caption">Клод Баррас, мультфильм, Швейцария, Франция, 2016</p>
                    </div>
                    <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
                </div>
            </article>

            <article className="card card_content_video card-pagination_page_main">
                <div className="video">
                    <a href="./films.html" className="card__link-wrap">
                        <img src={videoPrev} alt="Превью видео" className="video__img" />
                        <ul className="video__rubric-list">
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                        </ul>
                    </a>
                </div>
                <div className="card__video-info">
                    <div className="card__title-wrap">
                        <h2 className="section-title card__title">Волчок</h2>
                        <p className="caption card__title-caption">Василий Сигарев, Россия, 2009 год</p>
                    </div>
                    <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
                </div>
            </article>

            <article className="card card_content_video card-pagination_page_main">
                <div className="video">
                    <a href="./films.html" className="card__link-wrap">
                        <img src={videoPrev} alt="Превью видео" className="video__img" />
                        <ul className="video__rubric-list">
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                            <li>
                                <p className="rubric video__rubric">рубрика</p>
                            </li>
                        </ul>
                    </a>
                </div>
                <div className="card__video-info">
                    <div className="card__title-wrap">
                        <h2 className="section-title card__title">Жутко громко и запредельно близко</h2>
                        <p className="caption card__title-caption">Василий Сигарев, Борисов-Мусотов (Россия), 2009 год</p>
                    </div>
                    <a href="./films.html" className="link card__link link_action_open-video">смотреть трейлер</a>
                </div>
            </article>
        </section>
    );
}

export default Films;