import React from 'react';
import PropTypes from 'prop-types';

function ToDoList({ children }) {
  return <ul>{children}</ul>;
}

ToDoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { ToDoList };
