import './DeleteIcon.css';
import { ToDoIcon } from './ToDoIcon';
import React from 'react';
import PropTypes from 'prop-types';

export function DeleteIcon({ onDelete }) {
  return <ToDoIcon type="delete" onClick={onDelete} />;
}

DeleteIcon.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
