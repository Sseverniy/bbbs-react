import React from 'react';
import PropTypes from 'prop-types';
// import videoPrev from '../sourse/sass/images/video/video-prev.png';

function Movie({ imageUrl, info, link, title, tags }) {
  return (
    <article className='card card_content_video card-pagination_page_main'>
      <div className='video'>
        <a href={link} className='card__link-wrap' rel='noreferrer' target='_blank'>
          <img src={imageUrl} alt='Превью видео' className='video__img' />
          <ul className='video__rubric-list'>
            {tags.map((tag) => (
              <li key={tag.id}>
                <p className='rubric video__rubric'>{tag.name}</p>
              </li>
            ))}
          </ul>
        </a>
      </div>
      <div className='card__video-info'>
        <div className='card__title-wrap'>
          <h2 className='section-title card__title'>{title}</h2>
          <p className='caption card__title-caption'>{info}</p>
        </div>
        <a href={link} className='link card__link link_action_open-video' rel='noreferrer' target='_blank'>
          смотреть трейлер
        </a>
      </div>
    </article>
  );
}

Movie.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
    })
  ).isRequired,
};
export default Movie;
