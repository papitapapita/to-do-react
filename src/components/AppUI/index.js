import React from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoItem } from '../ToDoItem';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { AddToDoButton } from '../AddToDoButton';
import { LoadingItem } from '../LoadingItem';
import { ToDoContext } from '../ToDoContext';

export function AppUI() {
  return (
    <div className="App">
      <ToDoCounter />
      <ToDoSearch />

      <ToDoContext.Consumer>
        {({
          loading,
          error,
          filteredToDos,
          toggleCompletion,
          deleteToDo,
        }) => (
          <ToDoList>
            {loading &&
              new Array(4)
                .fill(0)
                .map((_, index) => (
                  <LoadingItem key={index} />
                ))}
            {error && <p>There was a problem!</p>}
            {!loading && filteredToDos.length === 0 && (
              <p>Create your first ToDo!</p>
            )}
            {filteredToDos.map((toDo) => (
              <ToDoItem
                key={toDo.description}
                description={toDo.description}
                completed={toDo.completed}
                onComplete={() =>
                  toggleCompletion(toDo.description)
                }
                onDelete={() =>
                  deleteToDo(toDo.description)
                }
              />
            ))}
          </ToDoList>
        )}
      </ToDoContext.Consumer>
      <AddToDoButton />
    </div>
  );
}
/*
AppUI.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  totalCompletedToDos: PropTypes.number.isRequired,
  totalToDos: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  filteredToDos: PropTypes.array.isRequired,
  addToDo: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};*/
