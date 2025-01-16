import './ToDoItem.css';
import PropTypes from 'prop-types';
import React from 'react';
import { DeleteIcon } from '../DeleteIcon';
import { CompleteIcon } from '../CompleteIcon';

function ToDoItem({
  description,
  completed,
  onComplete,
  onDelete,
}) {
  return (
    <li
      className={`to-do ${completed ? 'to-do--completed' : ''}`}
    >
      <CompleteIcon onComplete={onComplete} />
      <p className="to-do__text">{description}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

ToDoItem.propTypes = {
  loading: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { ToDoItem };
