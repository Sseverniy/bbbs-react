import React from "react";
import Meetup from "./Meetup";
import Title from "./Title";

// eslint-disable-next-line react/prop-types
function Calendar({toggleModal}) {
  return (
    <>
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
