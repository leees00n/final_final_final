import React from 'react';
import PropTypes from 'prop-types';
import './BasicHeart.css';
import heartImage from './heart.png';

const BasicHeart = ({ isRaised, handleRaiseHandSend }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleRaiseHandSend();
  };

  return (
    <>
      <button
        className={`input-line-btn raise-hand-btn${
          isRaised ? ' raise-hand-btn--raised' : ''
        }`}
        onClick={handleButtonClick}
      >
        <img src={heartImage} alt="Heart" />
      </button>
    </>
  );
};

BasicHeart.propTypes = {
  isRaised: PropTypes.bool,
  handleRaiseHandSend: PropTypes.func,
};

export default BasicHeart;
