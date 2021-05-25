import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {format} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import CalendarParentPopup from './CalendarParentPopup';

function CalendarCaptionPopup({ isOpen, toggleModal, nextPopup, event1 }) {
  const [startAt, setStartAt] = useState(new Date(event1.startAt));
  const [endAt, setEndAt] = useState(new Date(event1.endAt));
  useEffect(()=> {
    setStartAt(new Date(event1.startAt));
    setEndAt(new Date(event1.endAt));
  },[event1])
  return (
    <CalendarParentPopup isOpen={isOpen} toggleModal={toggleModal}>
      <>
        <div className='calendar__caption'>
          <div className='calendar__info'>
            <p className='calendar__type'>Волонтёры + дети</p>
            <p className='calendar__weekday'>{format(startAt, 'LLLL', { locale: ruLocale })} / {format(startAt, 'EEEE', { locale: ruLocale }) }</p>
          </div>
          <div className='calendar__about'>
            <h2 className='section-title calendar__title calendar__title_type_popup'>
              {event1.title}
            </h2>
            <p className='calendar__date'>{format(startAt, 'dd') }</p>
          </div>
        </div>
        <div className='calendar__meetup'>
          <ul className='calendar__info-list'>
            <li className='calendar__info-item'>
              <p className='calendar__time'>{format(startAt, 'hh:mm')}&ndash;{format(endAt, 'hh:mm')}</p>
            </li>
            <li className='calendar__info-item'>
              <p className='calendar__place'>{event1.address}</p>
            </li>
            <li className='calendar__info-item'>
              <p className='calendar__contact'>{event1.contact}</p>
            </li>
          </ul>
          <div className='calendar__description'>
            <p className='paragraph calendar__desc-paragraph'>
              {event1.description}
            </p>
          </div>
          <div className='calendar__submit'>
            <button className='button button_theme_light button_action_confirm' type='button' onClick={nextPopup}>
              Записаться
            </button>
            <p className='calendar__place-left'>Осталось 5 мест</p>
          </div>
        </div>
      </>
    </CalendarParentPopup>
  );
}

CalendarCaptionPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  nextPopup: PropTypes.func.isRequired,
  event1:
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

export default CalendarCaptionPopup;
