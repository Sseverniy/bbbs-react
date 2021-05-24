import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

function Meetup({ toggleModal, event }) {
  const [startAt] = useState(new Date(event.startAt));
  const [endAt] = useState(new Date(event.endAt));
  return (
    <article className='calendar'>
      <div className='calendar__caption'>
        <div className='calendar__info'>
          <p className='calendar__type'>Волонтёры + дети</p>
          <p className='calendar__weekday'>{format(startAt, 'LLLL', { locale: ruLocale })} / {format(startAt, 'EEEE', { locale: ruLocale }) }</p>
        </div>
        <div className='calendar__about'>
          <h2 className='section-title calendar__title'>{event.title}</h2>
          <p className='calendar__date'>{format(startAt, 'dd') }</p>
        </div>
      </div>
      <div className='calendar__meetup'>
        <ul className='calendar__info-list'>
          <li className='calendar__info-item'>
            <p className='calendar__time'>{format(startAt, 'hh:mm')}&ndash;{format(endAt, 'hh:mm')}</p>
          </li>
          <li className='calendar__info-item'>
            <p className='calendar__place'>{event.address}</p>
          </li>
          <li className='calendar__info-item'>
            <p className='calendar__contact'>{event.contact}</p>
          </li>
        </ul>
        <div className='calendar__submit'>
          <button
            className='button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up'
            type='button'
            onClick={toggleModal}
          >
            Записаться
          </button>
          <p className='calendar__place-left'>Осталось {event.seats - event.takenSeats} мест</p>
          <button className='button calendar__button-dots button_theme_light' type='button'>
            &#8226;&#8226;&#8226;
          </button>
        </div>
      </div>
    </article>
  );
}

Meetup.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  event:
    PropTypes.shape({
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
    })
  .isRequired
};

export default Meetup;
