import React from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";

Modal.setAppElement('#root')

function CitiesPopup({ isOpen, toggleModal }) {
  // Пока для теста захардкодил города
 const lk = [
    {
      id: 1,
      name: "Москва",
      isPrimary: true,
    },
    {
      id: 2,
      name: "Воронеж",
      isPrimary: false,
    },
   {
     id: 3,
     name: "Саратов",
     isPrimary: false,
   },
   {
     id: 4,
     name: "Омск",
     isPrimary: false,
   },
   {
     id: 2,
     name: "Краснодар",
     isPrimary: false,
   },
  ]
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
                  {lk.filter((item) =>  item.isPrimary).map((item) => <li className="cities__name"><a href="/#" target="_self" onClick={toggleModal} className="cities__link">{item.name}</a></li>
                  )}
                </ul>
                <ul className="cities__region">
                  {lk.filter((item) =>  !item.isPrimary).map((item) => <li className="cities__name"><a href="/#" target="_self" onClick={toggleModal}className="cities__link">{item.name}</a></li>
                  )}
                </ul>
            </Modal>
        </>
    );
}
CitiesPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
}
export default CitiesPopup;
