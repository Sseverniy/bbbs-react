import React from "react";
import MainSection from "./MainSection";
import WhereToGo from "./WhereToGo";
import Films from "./Films"
import graduatesBBBS from "../sourse/sass/images/video/video-main.jpg"

function Main() {
    return (
        <>
            <MainSection />
            <WhereToGo />
            <section className="main-section page__section">
                <article className="card card_color_blue card_content_quote">
                    <a href="./articles.html" className="card__link-wrap">
                        <h3 className="chapter-title card__quote">Развитие детей-сирот отличается от развития детей, живущих в семьях. Все  этапы развития у детей-сирот проходят с искажениями и имеют ряд негативных  особенностей.</h3>
                    </a>
                    <a href="./articles.html" className="link card__link">читать статью</a>
                </article>
            </section>
            <Films />
            <section className="main-section page__section">
                <article className="card-container card-container_type_main-video">
                    <div className="card card_color_yellow card_content_video-preview">
                        <div className="card__title-wrap">
                            <a href="./video.html" className="card__link-wrap">
                                <h2 className="section-title card__title">Эфир с выпускником нашей программы</h2>
                            </a>
                            <p className="caption card__title-caption">Иван Рустаев, выпускник программы</p>
                        </div>
                        <a href="123" className="link card__link link_action_open-video">смотреть видео</a>
                    </div>
                    <div className="card card_color_yellow card_content_video video">
                        <a href="./video.html" className="card__link-wrap">
                            <img src={graduatesBBBS} alt="Превью видео" className="video__img video__img_position_main-video" />
                        </a>
                    </div>
                </article>
            </section>
            <></>
            <section className="main-section page__section">
                <article className="card-container card-container_type_iframe">
                    <div className="card card_color_blue card_content_media">
                        <iframe className="card__iframe" title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" allowFullScreen="true" allow="clipboard-write; encrypted-media; picture-in-picture; web-share" />
                    </div>
                    <div className="main-questions">
                        <article className="question main-questions__item">
                            <a href="./questions.html" className="main-questions__link">
                                <h2 className="section-title question__title main-questions__title">Я боюсь, что ребёнок ко мне слишком сильно привяжется. Что делать?</h2>
                            </a>
                            <p className="rubric question__rubric main-questions__rubric">рубрика</p>
                        </article>

                        <article className="question main-questions__item">
                            <a href="./questions.html" className="main-questions__link">
                                <h2 className="section-title question__title main-questions__title">Возможно ли продлить срок участия в программе, если и я и мой «младший» хотим остаться в программе?</h2>
                            </a>
                            <p className="rubric question__rubric main-questions__rubric">рубрика</p>
                        </article>

                        <article className="question main-questions__item">
                            <a href="./questions.html" className="main-questions__link">
                                <h2 className="section-title question__title main-questions__title">Что делать если Ваш младший решил закрыть пару, т.к. слишком занят с учебой и друзьями?</h2>
                            </a>
                            <p className="rubric question__rubric main-questions__rubric">рубрика</p>
                        </article>
                    </div>
                </article>
            </section>

            <section className="main-section page__section">
                <article className="card card_color_green card_content_quote">
                    <a href="./articles.html" className="card__link-wrap">
                        <h3 className="chapter-title card__quote">У таких детей возникает ощущение отверженности. Оно приводит к напряженности и  недоверию к людям и, как итог, к реальному неприятию себя и окружающих.</h3>
                    </a>
                    <a href="./articles.html" className="link card__link">читать статью</a>
                </article>
            </section>
        </>
    );
}

export default Main;
