import React from 'react';
import PropTypes from 'prop-types';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoItem } from '../ToDoItem';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { AddToDoButton } from '../AddToDoButton';

export function AppUI({
  totalCompletedToDos,
  totalToDos,
  searchValue,
  setSearchValue,
  filteredToDos,
  addToDo,
  toggleCompletion,
  deleteToDo,
}) {
  return (
    <div className="App">
      <ToDoCounter
        completed={totalCompletedToDos}
        total={totalToDos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {filteredToDos.map((toDo) => (
          <ToDoItem
            key={toDo.description}
            description={toDo.description}
            completed={toDo.completed}
            onComplete={() =>
              toggleCompletion(toDo.description)
            }
            onDelete={() => deleteToDo(toDo.description)}
          />
        ))}
      </ToDoList>
      <AddToDoButton onAdd={addToDo} />
    </div>
  );
}

AppUI.propTypes = {
  totalCompletedToDos: PropTypes.number.isRequired,
  totalToDos: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  filteredToDos: PropTypes.array.isRequired,
  addToDo: PropTypes.func.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};
