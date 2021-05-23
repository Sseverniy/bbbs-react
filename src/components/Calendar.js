import React from "react";
import {Helmet} from 'react-helmet';
import Meetup from "./Meetup";
import Title from "./Title";

// eslint-disable-next-line react/prop-types
function Calendar({toggleModal}) {
  return (
    <>
      <Helmet>
        <title>Календарь мерояприятий</title>
        <meta name="description" content="Календарь событий и мероприятий для настаников"/>
        <meta name="keywords" content="Календарь, мероприятия, события"/>
      </Helmet>
      <Title />
      <section className="calendar-container page__section">
        <Meetup toggleModal={toggleModal}/>
        <Meetup />
        <Meetup />
        <Meetup />
        <Meetup />
      </section>
    </>
  );
}

export default Calendar;
