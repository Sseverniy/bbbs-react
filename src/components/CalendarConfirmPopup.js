import React from 'react';
import PropTypes from 'prop-types';
import CalendarParentPopup from './CalendarParentPopup';

// eslint-disable-next-line react/prop-types
function CalendarConfirmPopup({ isOpen, toggleModal, nextPopup }) {
  return (
    <CalendarParentPopup isOpen={isOpen} toggleModal={toggleModal}>
      <>
        <h2 className='section-title calendar__title_type_popup calendar__title_type_confirmation'>
          Подтвердить запись на мероприятие «Субботний meet up: учимся проходить интервью» 5 декабря с 12:00–14:00
        </h2>
        <div className='calendar__buttons'>
          <button className='button button_theme_light calendar__confirm' type='button' onClick={nextPopup}>
            Подтвердить запись
          </button>
          <button className='button popup__cancel' type='button' onClick={toggleModal}>
            Отменить
          </button>
        </div>
      </>
    </CalendarParentPopup>
  );
}

CalendarParentPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default CalendarConfirmPopup;

