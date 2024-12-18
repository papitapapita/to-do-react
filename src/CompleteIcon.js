import './CompleteIcon.css';
import React from 'react';
import PropTypes from 'prop-types';
import { ToDoIcon } from './ToDoIcon';

export function CompleteIcon({ onComplete }) {
  return <ToDoIcon type="completed" onClick={onComplete} />;
}

CompleteIcon.propTypes = {
  onComplete: PropTypes.func,
};
