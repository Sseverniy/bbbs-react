import React from 'react';
import CalendarParentPopup from './CalendarParentPopup';

function CalendarCaptionPopup() {
  return (
    <CalendarParentPopup>
      <h2 className='section-title calendar__title_type_popup calendar__title_type_confirmation'>
        Подтвердить запись на мероприятие «Субботний meet up: учимся проходить интервью» 5 декабря с 12:00–14:00
      </h2>
      <div className='calendar__buttons'>
        <button className='button button_theme_light calendar__confirm' type='button'>
          Подтвердить запись
        </button>
        <button className='button popup__cancel' type='button'>
          Отменить
        </button>
      </div>
    </CalendarParentPopup>
  );
}

export default CalendarCaptionPopup;
