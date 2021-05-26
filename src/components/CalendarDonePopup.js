import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import CalendarParentPopup from './CalendarParentPopup';

function CalendarDonePopup({ isOpen, toggleModal, event1 }) {
  const [startAt, setStartAt] = useState(new Date(event1.startAt));
  const [endAt, setEndAt] = useState(new Date(event1.endAt));
  useEffect(() => {
    setStartAt(new Date(event1.startAt));
    setEndAt(new Date(event1.endAt));
  }, [event1]);
  return (
    <CalendarParentPopup isOpen={isOpen} toggleModal={toggleModal}>
      <>
        <div className='calendar__image-done' />
        <h2 className='section-title calendar__title_type_popup calendar__title_type_popup-done '>
          Вы записаны на мероприятие «{event1.title}» {format(startAt, 'd MMMM', { locale: ruLocale })}
          &nbsp; c {format(startAt, 'hh:mm')}&ndash;{format(endAt, 'hh:mm')}
        </h2>
        <h2 className='section-title calendar__title_type_popup calendar__title_type_popup-done'>
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </h2>
        <button className='button calendar__back popup__cancel' type='button' onClick={toggleModal}>
          Вернуться к календарю
        </button>
      </>
    </CalendarParentPopup>
  );
}

CalendarDonePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
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

export default CalendarDonePopup;
