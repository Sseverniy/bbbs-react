import React from 'react';
import PropTypes from 'prop-types';
// import twoGirls from '../sourse/sass/images/where-to-go/two-girls-on-the-beach.jpg';

function WhereToGo({ place }) {
  const { description, imageUrl, info, link, name, title } = place;
  return (
    <section className='main-section page__section'>
      <article className='card-container card-container_type_main-article'>
        <div className='card card_type_main card_color_yellow'>
          <p className='rubric card__rubric'>Выбор наставника</p>
          <div className='card__title-wrap'>
            <a href='./place.html' className='card__link-wrap'>
              <h2 className='section-title card__title'>{title}</h2>
            </a>
            <p className='caption card__title-caption'>{name}</p>
          </div>
          <a href='./place.html' className='card__link-wrap card__link-wrap_content_article-img'>
            <img src={imageUrl} alt='Сплав на байдарках' className='card__img' />
          </a>
          <a href={link} className='link card__link' rel='noreferrer' target='_blank'>
            перейти на сайт
          </a>
        </div>
        <div className='card card_content_annotation card_type_main'>
          <div className='card__content'>
            <p className='caption card__annotation-caption'>{info}</p>
            <div className='card__annotation card__annotation_position_main-card'>
              <p className='paragraph card__paragraph'>{description}</p>
              <p className='paragraph card__paragraph'>{description}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
WhereToGo.propTypes = {
  place: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    info: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
export default WhereToGo;
