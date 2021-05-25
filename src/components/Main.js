import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import WhereToGo from './WhereToGo';
import Movie from './Movie';
import Meetup from './Meetup';
import Question from './Question';
// import graduatesBBBS from '../sourse/sass/images/video/video-main.jpg';
import calendarLogo from '../sourse/sass/images/svg/calendar_logo.svg';
// import historyMariaAndAlina from '../sourse/sass/images/stories/Maria-and-Alina.jpg';

function Main({ loggedIn, history, place, video, movies, questions, articles, toggleModal, event, setEvent1 }) {
  console.log(articles);
  const secondsToHM = (time) => {
    const h = Math.floor(time / 60);
    const m = Math.floor(time % 60);

    const hDisplay = h > 0 ? `${h}ч ` : '';
    const mDisplay = m > 0 ? `${m}м ` : '';

    return hDisplay + mDisplay;
  };

  return (
    <>
      <Helmet>
        <title>Старшие Братья Старшие Сёстры</title>
        <meta
          name='description'
          content='«Старшие Братья Старшие Сестры» — межрегиональная общественная организация содействия воспитанию подрастающего поколения.
        НКО поддерживает детей, которым требуется внимание: оставшихся без попечения родителей, приемных, детей из неполных, многодетных или неблагополучных семей,
        детей с ограниченными возможностями.'
        />
        <meta name='keywords' content='Дети' />
      </Helmet>
      <section className='lead page__section'>
        <article className='card-container card-container_type_identical'>
          {loggedIn === true ? (
            <Meetup event1={event} toggleModal={toggleModal} setEvent1={setEvent1} />
          ) : (
            <article className='card card_color_green stub'>
              <div className='stub__upper-element'>
                <a href='./index.html'>
                  <img src={calendarLogo} alt='Логотип Старшие Братья Старшие Сестры России' className='stub__logo' />
                </a>
              </div>
              <div className='stub__content'>
                <h2 className='section-title stub__text'>
                  Наставники.про – цифоровая информационная платформа огрганизации «Старшие Братья Старшие Сестры».
                  Созданная для поддержки наставников программы.
                </h2>
              </div>
            </article>
          )}
          <article className='card card_content_media'>
            <img src={history.imageUrl} alt='История Марины и Алины' className='card__media-img' />
            <a href='./stories.html' className='card__media-link section-title'>
              {history.title}
            </a>
          </article>
        </article>
      </section>
      <WhereToGo place={place} />
      <section className='main-section page__section'>
        <article className='card card_color_blue card_content_quote'>
          <a href='./articles.html' className='card__link-wrap'>
            <h3 className='chapter-title card__quote'>
              Развитие детей-сирот отличается от развития детей, живущих в семьях. Все этапы развития у детей-сирот
              проходят с искажениями и имеют ряд негативных особенностей.
            </h3>
          </a>
          <a href='./articles.html' className='link card__link'>
            читать статью
          </a>
        </article>
      </section>
      <section className='main-section page__section cards-grid cards-grid_content_small-cards'>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            imageUrl={movie.imageUrl}
            info={movie.info}
            link={movie.link}
            title={movie.title}
            tags={movie.tags}
          />
        ))}
      </section>
      <section className='main-section page__section'>
        <article className='card-container card-container_type_main-video'>
          <div className='card card_color_yellow card_content_video-preview'>
            <div className='card__title-wrap'>
              <a href={video.link} className='card__link-wrap' rel='noreferrer' target='_blank'>
                <h2 className='section-title card__title'>{video.title}</h2>
              </a>
              <p className='caption card__title-caption'>{video.info}</p>
            </div>
            <a href={video.link} className='link card__link link_action_open-video' rel='noreferrer' target='_blank'>
              смотреть видео
            </a>
          </div>
          <div className='card card_color_yellow card_content_video video'>
            <a href={video.link} className='card__link-wrap' rel='noreferrer' target='_blank'>
              <img src={video.imageUrl} alt='Превью видео' className='video__img video__img_position_main-video' />
              <p className='video__duration video__duration_position_main-video paragraph'>
                {secondsToHM(video.duration)}
              </p>
            </a>
          </div>
        </article>
      </section>
      <></>
      <section className='main-section page__section'>
        <article className='card-container card-container_type_iframe'>
          <div className='card card_color_blue card_content_media'>
            <iframe
              className='card__iframe'
              title='facebook'
              src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=630&height=630&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
              scrolling='no'
              allow='clipboard-write; encrypted-media; picture-in-picture; web-share'
            />
          </div>
          <div className='main-questions'>
            {questions.map((question) => (
              <Question key={question.id} title={question.title} tags={question.tags} />
            ))}
          </div>
        </article>
      </section>

      <section className='main-section page__section'>
        <article className='card card_color_green card_content_quote'>
          <a href='./articles.html' className='card__link-wrap'>
            <h3 className='chapter-title card__quote'>
              У таких детей возникает ощущение отверженности. Оно приводит к напряженности и недоверию к людям и, как
              итог, к реальному неприятию себя и окружающих.
            </h3>
          </a>
          <a href='./articles.html' className='link card__link'>
            читать статью
          </a>
        </article>
      </section>
    </>
  );
}

Main.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  place: PropTypes.shape({
    chosen: PropTypes.bool,
  }).isRequired,
  video: PropTypes.shape({
    id: PropTypes.number,
    duration: PropTypes.number,
    imageUrl: PropTypes.string,
    info: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleModal: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.number,
    booked: PropTypes.bool,
    address: PropTypes.string,
    contact: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    startAt: PropTypes.string,
    endAt:  PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    city: PropTypes.number,
  }).isRequired,
  setEvent1: PropTypes.func.isRequired,
};

export default Main;
