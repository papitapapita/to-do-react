import React from 'react';
import PropTypes from 'prop-types';
import './ToDoCounter.css';

export function ToDoCounter({ completed, total, loading }) {
  const isCompleted = completed === total;
  return (
    <h1 className="title">
      {loading && <b>Loading...</b>}
      {!loading &&
        (isCompleted ? (
          <b className="title__completed">
            You have completed everything
          </b>
        ) : (
          <span>
            You have completed {completed} of {total} tasks
          </span>
        ))}
    </h1>
  );
}

ToDoCounter.propTypes = {
  loading: PropTypes.bool.isRequired,
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
