import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');
// eslint-disable-next-line react/prop-types
function CalendarParentPopup({ children, isOpen, toggleModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel='My dialog'
      className='popup__container popup__container_type_calendar'
      overlayClassName='popup popup_type_description popup_opened'
      shouldCloseOnOverlayClick
      closeTimeoutMS={500}
    >
      <button className='popup__close popup__cancel' type='button' aria-label='Закрыть попап' onClick={toggleModal} />
      {children}
    </Modal>
  );
}

CalendarParentPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default CalendarParentPopup;
