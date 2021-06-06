import React from 'react';
import PropTypes from 'prop-types';

function Loader({isLoading}) {
  return(
    <div className={isLoading ? 'loader' : 'loader loader_done'}>
      <div className='loader__img' />
    </div>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
