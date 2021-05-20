import React from "react";
import { Link } from "react-router-dom";
import MeetingReviewCard from "./MeetingReviewCard";

function PersonalArea() {
  return (
    <main className="main">
      <section className="personal-area page__section">
        <div className="personal-area__user-info">
          <Link
            to="/"
            className="paragraph personal-area__user-link personal-area__user-link_type_exit"
          >
            Выйти
          </Link>
        </div>
        <div className="personal-area__sign-up">
          <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
            У вас нет записи на мероприятия
          </h2>
        </div>

        <div className="personal-area__story">
          <h2 className="section-title personal-area__title">
            Составьте историю вашей дружбы с младшим. Эта страница доступна
            только вам.
          </h2>
          <MeetingReviewCard />
          <MeetingReviewCard />
        </div>
      </section>
    </main>
  );
}

export default PersonalArea;
