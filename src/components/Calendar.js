import React from "react";
import Meetup from "./Meetup";
import Title from "./Title";

function Calendar() {
  return (
    <>
      <Title />
      <section className="calendar-container page__section">
        <Meetup />
      </section>
    </>
  );
}

export default Calendar;
