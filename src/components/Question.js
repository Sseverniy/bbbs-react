import React from 'react';
import PropTypes from 'prop-types';

function Question({ title, tags }) {
  return (
    <article className='question main-questions__item'>
      <a href='./questions.html' className='main-questions__link'>
        <h2 className='section-title question__title main-questions__title'>{title}</h2>
      </a>
      {tags.map((tag) => (
        <p key={tag.id} className='rubric question__rubric main-questions__rubric'>
          {tag.name}
        </p>
      ))}
    </article>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      spug: PropTypes.string,
    })
  ).isRequired,
};

export default Question;
