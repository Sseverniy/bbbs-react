import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

function LoginPopup({ isOpen, toggleModal, onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    toggleModal();
    onLogin(data);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='popup popup_opened popup_type_sign-in'
        closeTimeoutMS={500}
        overlayClassName='popup_opened'
        shouldCloseOnOverlayClick
      >
        <form className='popup__container popup__container_type_sign-in' onSubmit={handleSubmit(onSubmit)}>
          <button className='popup__close popup__cancel' type='button' onClick={toggleModal} aria-label='Close' />
          <h2 className='section-title popup__title_type_sign-in'>Вход</h2>
          <p className='paragraph popup__sign-in'>
            Вход в личный кабинет доступен наставникам программы «Старшие Братья Старшие Сёстры».
          </p>
          <p className='paragraph popup__sign-in'>
            Пожалуйста, введите логин и пароль из письма. Если вам не приходило письмо, свяжитесь с вашим куратором.
          </p>
          <input
            type='text'
            className='popup__input'
            placeholder='Логин'
            {...register('login', { required: 'Это обязательное поле' })}
            onChange={handleChange}
          />
          <input
            type='password'
            className='popup__input'
            placeholder='Пароль'
            {...register('password', {
              required: 'Это обязательное поле',
              minLength: { value: 4, message: 'Пароль меньше 4 символов' },
            })}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <p className='popup__forgot-password '>Забыли пароль?</p>
          <button className='button button_theme_light popup__enter' type='submit' onSubmit={handleSubmit(onSubmit)}>
            Войти
          </button>
        </form>
      </Modal>
    </div>
  );
}
LoginPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  data: PropTypes.func,
  onLogin: PropTypes.func.isRequired,
};

LoginPopup.defaultProps = {
  data: PropTypes.func,
};
export default LoginPopup;
