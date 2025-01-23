import React from 'react';
import './AddToDoButton.css';
import PropTypes from 'prop-types';

export function AddToDoButton({ setOpenModal }) {
  return (
    <button
      className="add-button"
      type="button"
      value="+"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

AddToDoButton.propTypes = {
  setOpenModal: PropTypes.func,
};
