import React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import MeetingReviewCard from './MeetingReviewCard';

function PersonalArea() {
  return (
    <section className='personal-area page__section'>
      <Helmet>
        <title>Личный кабинет</title>
        <meta name='description' content='Личный кабинет наставника' />
        <meta name='keywords' content='Личный кабинет' />
      </Helmet>
      {/* <div className='personal-area__user-info'>
        <p className='paragraph personal-area__user-link personal-area__user-link_type_city'>{`Москва. `}</p>
        <button
          type='button'
          className='paragraph personal-area__user-link personal-area__user-link_type_exit personal-area__button-top'
        >
          Изменить город
        </button>
        <button
          type='button'
          className='paragraph personal-area__user-link personal-area__user-link_type_exit personal-area__button-top'
          onClick={isLogOut}
        >
          Выйти
        </button>
      </div> */}
      <div className='personal-area__sign-up'>
        <h2 className='section-title personal-area__title personal-area__title_type_sign-up'>
          У вас нет записи на мероприятия
        </h2>
      </div>

      <div className='personal-area__story'>
        <h2 className='section-title personal-area__title'>
          Составьте историю вашей дружбы с младшим. Эта страница доступна только вам.
        </h2>
        <MeetingReviewCard />
        <MeetingReviewCard />
      </div>
    </section>
  );
}

// PersonalArea.propTypes = {
//   isLogOut: PropTypes.func.isRequired,
// };

export default PersonalArea;
