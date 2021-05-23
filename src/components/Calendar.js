import React from "react";
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';
import Meetup from "./Meetup";
import Title from "./Title";
// eslint-disable-next-line react/prop-types
function Calendar({toggleModal, events}) {
  return (
    <>
      <Helmet>
        <title>Календарь мерояприятий</title>
        <meta name="description" content="Календарь событий и мероприятий для настаников"/>
        <meta name="keywords" content="Календарь, мероприятия, события"/>
      </Helmet>
      <Title />
      <section className="calendar-container page__section">
        {events.map((event) => <Meetup toggleModal={toggleModal} event={event}/>)}
      </section>
    </>
  );
}
Calendar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(
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
  ).isRequired
}

export default Calendar;
