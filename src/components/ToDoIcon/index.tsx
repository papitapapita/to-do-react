import './ToDoIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck as CheckSVG } from 'react-icons/fa6';
import { FaX as DeleteSVG } from 'react-icons/fa6';

const iconTypes = {
  completed: <CheckSVG />,
  delete: <DeleteSVG />,
};

export function ToDoIcon({ type, onClick }) {
  return (
    <div
      className={`to-do__${type}-logo to-do__logo`}
      onClick={onClick}
    >
      {iconTypes[type]}
    </div>
  );
}

ToDoIcon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
