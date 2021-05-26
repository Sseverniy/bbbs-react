import React from 'react';
import PropTypes from 'prop-types';
// import { format } from 'date-fns';
// import ruLocale from 'date-fns/locale/ru';

function Title({ month, onClick, }) {
  const [isChose, setIsChose] = React.useState(false);
  const [btnClass, setBtnClass] = React.useState('button tags__button');
  // let monthTagClassName = (
  //   `button tags__button ${isChose ? 'tags__button_active' : ''}`
  // );

  function chooseMonthTag(e) {
    setIsChose(!isChose);
    if(isChose) {
      setBtnClass('button tags__button');
      onClick();
      return
    }
    setBtnClass('button tags__button tags__button_active');
    onClick(month.toLowerCase());
    console.log(e.target.innerText);
  }

  const finalMonthName = month[0].toUpperCase() + month.substring(1);

  return (
    <li className='tags__list-item'>
      <button className={btnClass} type='button' onClick={chooseMonthTag}>
        {finalMonthName}
      </button>
    </li>
  );
}

Title.propTypes = {
  month: PropTypes.string
  .isRequired,
  onClick: PropTypes.func.isRequired,
  // selectedMonths: PropTypes.arrayOf(String).isRequired,
  // setSelectedMonths: PropTypes.func.isRequired,

};

export default Title;
