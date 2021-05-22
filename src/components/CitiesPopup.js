import React from 'react';
import Modal from 'react-modal';
import PropTypes from "prop-types";

Modal.setAppElement('#root')

function CitiesPopup({ isOpen, toggleModal }) {

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
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Москва</a></li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Санкт-Петербург</a>
                    </li>
                </ul>
                <ul className="cities__region">
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Алексин</a></li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Барнаул</a></li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Екатеринбург</a>
                    </li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Зубцов</a></li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Калининград</a>
                    </li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Киреевск</a></li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Коломна</a></li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Новомосковск</a>
                    </li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Орехово-Зуево</a>
                    </li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Тверь</a></li>
                    <li className="cities__name"><a href="/#" target="_self" className="cities__link">Тула</a></li>
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