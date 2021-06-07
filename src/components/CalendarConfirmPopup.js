import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import CalendarParentPopup from './CalendarParentPopup';
import { signUpForEvent, signOutFromEvent } from '../utils/api';

function CalendarConfirmPopup({ isOpen, toggleModal, toggleDone, event1, loader }) {
  const [startAt, setStartAt] = useState(new Date(event1.startAt));
  const [endAt, setEndAt] = useState(new Date(event1.endAt));

  function confirmBooking() {
    if (!event1.booked) {
      loader(true);
      signUpForEvent(event1)
        .then(() => {
          toggleDone();
          console.log('Вы успешно записались на мероприятие');
        })
        .catch((err) => console.log(`Возникла ошибка ${err.message} при попытке записаться на мероприятие`))
        .finally(() => loader(false));
    } else {
      loader(true);
      signOutFromEvent(event1)
        .then(() => {
          console.log('Вы успешно отменили запись');
        })
        .catch((err) => console.log(`Возникла ошибка ${err.message} при попытке отменить запись`))
        .finally(() => loader(false));
    }
  }

  useEffect(() => {
    setStartAt(new Date(event1.startAt));
    setEndAt(new Date(event1.endAt));
  }, [event1]);

  return (
    <CalendarParentPopup isOpen={isOpen} toggleModal={toggleModal}>
      <>
        <form className='popup__container popup__container_type_confirmation'>
          <h2 className='section-title calendar__title_type_popup calendar__title_type_confirmation'>
            Подтвердить запись на мероприятие « {event1.title}» {format(startAt, 'd MMMM', { locale: ruLocale })}
            &nbsp; c {format(startAt, 'hh:mm')}&ndash;{format(endAt, 'hh:mm')}
          </h2>
          <div className='calendar__buttons'>
            <button className='button button_theme_light calendar__confirm' type='button' onClick={confirmBooking}>
              Подтвердить запись
            </button>
            <button className='button popup__cancel' type='button' onClick={toggleModal}>
              Отменить
            </button>
          </div>
        </form>
      </>
    </CalendarParentPopup>
  );
}

CalendarConfirmPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  toggleDone: PropTypes.func.isRequired,
  loader: PropTypes.func.isRequired,
  event1: PropTypes.shape({
    id: PropTypes.number,
    booked: PropTypes.bool,
    address: PropTypes.string,
    contact: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    seats: PropTypes.number,
    takenSeats: PropTypes.number,
    city: PropTypes.number,
  }).isRequired,
};

export default CalendarConfirmPopup;
