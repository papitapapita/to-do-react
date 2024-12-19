import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { AddToDoButton } from './AddToDoButton';
//import { toDos as defaultToDos } from './toDos';
import React, { useState, useMemo } from 'react';

const localStorageName = 'TODOS';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [toDos, setToDos] = useState(() => {
    const localStorageToDos = localStorage.getItem(
      localStorageName
    );

    if (!localStorageToDos) {
      return [];
    }

    return JSON.parse(localStorageToDos);
  });

  const totalCompletedToDos = toDos?.filter(
    (toDo) => toDo.completed
  ).length;
  const totalToDos = toDos.length;

  const filteredToDos = useMemo(() => {
    return toDos.filter((toDo) =>
      toDo.description
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  }, [toDos, searchValue]);

  const toggleCompletion = (description) => {
    const newToDos = toDos.map((toDo) =>
      toDo.description === description
        ? { ...toDo, completed: !toDo.completed }
        : toDo
    );

    setToDos(newToDos);

    localStorage.setItem(
      localStorageName,
      JSON.stringify(newToDos)
    );
  };

  const deleteToDo = (description) => {
    const newToDos = toDos.filter(
      (toDo) => toDo.description !== description
    );

    setToDos(newToDos);

    localStorage.setItem(
      localStorageName,
      JSON.stringify(newToDos)
    );
  };

  const addToDo = (newToDo) => {
    setToDos((prevToDos) => [...prevToDos, newToDo]);
  };

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

export default App;
