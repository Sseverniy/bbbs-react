import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import Meetup from './Meetup';
import Title from './Title';

function Calendar({ toggleModal, events, sortByMonth, listOfMonths, setEvent1 }) {
  // const [selectedMonths, setSelectedMonths] = useState(['май','июнь','июль']);

  function getUniqueMonths() {
    // функция, которая перебирает события и возвращает массив с названиями месяцев
    const monthArray = events.map((event) => {
      const newMonth = format(new Date(event.startAt), 'LLLL', { locale: ruLocale }).toString();
      return newMonth;
    });
    // возвращаем только уникальные значения месяцев
    return Array.from(new Set(monthArray));
  }
  const uniqueMonths = getUniqueMonths();

  return (
    <>
      <Helmet>
        <title>Календарь мерояприятий</title>
        <meta name='description' content='Календарь событий и мероприятий для настаников' />
        <meta name='keywords' content='Календарь, мероприятия, события' />
      </Helmet>
      <section className='lead page__section'>
        <h1 className='main-title'>Календарь</h1>
        <div className='tags'>
          <ul className='tags__list'>
            {uniqueMonths.map((month) => (
              <Title month={month} onClick={sortByMonth} key={month} />
            ))}
          </ul>
        </div>
      </section>
      <section className='calendar-container page__section'>
        {listOfMonths.map((event) => (
          <Meetup toggleModal={toggleModal} event1={event} key={event.id} setEvent1={setEvent1} />
        ))}
      </section>
    </>
  );
}
Calendar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  sortByMonth: PropTypes.func.isRequired,
  setEvent1: PropTypes.func.isRequired,
  listOfMonths: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default Calendar;
