import React from 'react';
import PropTypes from 'prop-types';
import CalendarParentPopup from './CalendarParentPopup';

function CalendarDonePopup({ isOpen, toggleModal }) {
  return (
    <CalendarParentPopup isOpen={isOpen} toggleModal={toggleModal}>
      <>
        <div className='calendar__image-done' />
        <h2 className='section-title calendar__title_type_popup calendar__title_type_popup-done '>
          Вы записаны на мероприятие «Субботний meet up: учимся проходить интервью» 5 декабря с 12:00–14:00.
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
};

export default CalendarDonePopup;
