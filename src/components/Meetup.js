import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {signUpForEvent, signOutFromEvent} from '../utils/api';

function Meetup({ toggleModal, event1, setEvent1, toggleDone }) {
  const [startAt] = useState(new Date(event1.startAt));
  const [endAt] = useState(new Date(event1.endAt));

  function clickHandler() {
    toggleModal();
    setEvent1(event1);
  }

  function bookEvent() {
    if (!event1.booked) {
      signUpForEvent(event1)
        .then(() => {
          toggleDone();
          console.log('Вы успешно записались на мероприятие');
        })
        .catch((err) => console.log(`Возникла ошибка ${err.message} при попытке записаться на мероприятие`));
    } else {
      signOutFromEvent(event1)
      .then(()=>{
        console.log('Вы успешно отменили запись');
      })
      .catch((err) => console.log(`Возникла ошибка ${err.message} при попытке отменить запись`))
    }
  }

  return (
    <article className={event1.booked ? 'calendar calendar_selected' : 'calendar'}>
      <div className='calendar__caption'>
        <div className='calendar__info'>
          <p className='calendar__type'>Волонтёры + дети</p>
          <p className='calendar__weekday'>
            {format(startAt, 'LLLL', { locale: ruLocale })} / {format(startAt, 'EEEE', { locale: ruLocale })}
          </p>
        </div>
        <div className='calendar__about'>
          <h2 className='section-title calendar__title'>{event1.title}</h2>
          <p className='calendar__date'>{format(startAt, 'dd')}</p>
        </div>
      </div>
      <div className='calendar__meetup'>
        <ul className='calendar__info-list'>
          <li className='calendar__info-item'>
            <p className='calendar__time'>
              {format(startAt, 'hh:mm')}&ndash;{format(endAt, 'hh:mm')}
            </p>
          </li>
          <li className='calendar__info-item'>
            <p className='calendar__place'>{event1.address}</p>
          </li>
          <li className='calendar__info-item'>
            <p className='calendar__contact'>{event1.contact}</p>
          </li>
        </ul>
        <div className='calendar__submit'>
          <button
            className='button button_theme_light calendar__button calendar__button_selected calendar__button_action_sign-up '
            type='button'
            onClick={bookEvent}
          >
            {event1.booked ? 'Отменить запись' : 'Записаться'}
          </button>
          <p className='calendar__place-left'>Осталось {event1.seats - event1.takenSeats} мест</p>
          <button className='button calendar__button-dots button_theme_light' type='button' onClick={clickHandler}>
            &#8226;&#8226;&#8226;
          </button>
        </div>
      </div>
    </article>
  );
}

Meetup.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  setEvent1: PropTypes.func.isRequired,
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
  .isRequired,
  toggleDone: PropTypes.func.isRequired,
};

export default Meetup;
