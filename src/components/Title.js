import React from 'react';
import PropTypes from 'prop-types';
// import { format } from 'date-fns';
// import ruLocale from 'date-fns/locale/ru';

function Title({ month }) {
  const [isChose, setIsChose] = React.useState(false);
  const monthTagClassName = (
    `button tags__button ${isChose ? 'tags__button_active' : ''}`
  );

  function chooseMonthTag(e) {
    setIsChose(!isChose);
    console.log(e.target.innerText);
  }

  const finalMonthName = month[0].toUpperCase() + month.substring(1);

  return (
    <li className='tags__list-item'>
      <button className={monthTagClassName} type='button' onClick={chooseMonthTag}>
        {finalMonthName}
      </button>
    </li>
  );
}

Title.propTypes = {
  month: PropTypes.string
  .isRequired
};

export default Title;
