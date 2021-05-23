import React from 'react';
import { useDropzone } from 'react-dropzone';

function MeetingReviewCard() {
  const [files, setFiles] = React.useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name} className='card card_content_media'>
      <img src={file.preview} alt='Катя' className='personal-area__photo' />
    </div>
  ));
  return (
    <article className='card-container card-container_type_personal-area'>
      {files.length>0 ? (
        images
      ) : (
        <div {...getRootProps()} className='card personal-area__card personal-area__card_type_add-photo'>
          <button aria-label='Кнопка добавления фотографии' className='personal-area__add-photo-button' type='button' />
          <input {...getInputProps()} className='caption personal-area__bottom-caption' />
        </div>
      )}
      <div className='card personal-area__card personal-area__card_type_content'>
        <form action='' name='add-story-form' className='personal-area__form'>
          <input type='text' name='place' placeholder='Место встречи' required className='personal-area__form-input' />
          <input
            type='date'
            name='date'
            placeholder='Дата&emsp;'
            required
            className='personal-area__form-input'
            onChange="this.classNameName=(this.value!=''?'has-value':'')"
          />
          <textarea
            type='text'
            name='story'
            className='personal-area__form-input personal-area__form-input_type_textarea'
            placeholder='Опишите вашу встречу, какие чувства вы испытывали, что понравилось / не понравилось'
            required
          />

          <div className='personal-area__rating'>
            <button
              aria-label='Кнопка оценки встречи: хорошо'
              className='personal-area__rate personal-area__rate_type_good'
              type='button'
            />
            <button
              aria-label='Кнопка оценки встречи: удовлетворительно'
              className='personal-area__rate personal-area__rate_type_neutral'
              type='button'
            />
            <button
              aria-label='Кнопка оценки встречи: плохо'
              className='personal-area__rate personal-area__rate_type_bad'
              type='button'
            />
            <p className='caption personal-area__rating-label'>Оцените проведенное время</p>
          </div>

          <div className='personal-area__buttons'>
            <button type='button' aria-label='Кнопка удалить' className='button personal-area__delete'>
              Удалить
            </button>
            <button className='button' type='submit' disabled>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default MeetingReviewCard;
