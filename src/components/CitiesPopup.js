import React from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";

Modal.setAppElement('#root')

function CitiesPopup({ isOpen, toggleModal, cities }) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="popup__container popup__container_type_cities"
                overlayClassName="popup popup_opened popup_type_cities cities"
                shouldCloseOnOverlayClick
            >
                <h2 className="cities__title section-title">Выберите ваш город</h2>
                <ul className="cities__capitals">
                  {cities.filter((item) =>  item.isPrimary).map((item) => <li className="cities__name" key={item.id}><a href="/#" target="_self" onClick={toggleModal} className="cities__link">{item.name}</a></li>
                  )}
                </ul>
                <ul className="cities__region">
                  {cities.filter((item) =>  !item.isPrimary).map((item) => <li className="cities__name" key={item.id}><a href="/#" target="_self" onClick={toggleModal}className="cities__link">{item.name}</a></li>
                  )}
                </ul>
            </Modal>
        </>
    );
}
CitiesPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isPrimary: PropTypes.bool
    })
  ).isRequired
}
export default CitiesPopup;
