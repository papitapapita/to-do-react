import React, { useContext } from 'react';
import './ToDoCounter.css';
import { ToDoContext } from '../ToDoContext';

export function ToDoCounter() {
  const { totalCompletedToDos, totalToDos, loading } =
    useContext(ToDoContext);
  console.log(totalCompletedToDos, totalToDos, loading);
  const isCompleted = totalCompletedToDos === totalToDos;
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
            You have completed {totalCompletedToDos} of{' '}
            {totalToDos} tasks
          </span>
        ))}
    </h1>
  );
}
