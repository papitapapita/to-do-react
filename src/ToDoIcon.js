import './ToDoIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

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
