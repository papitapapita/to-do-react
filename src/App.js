import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { AddToDoButton } from './AddToDoButton';
import { toDos as defaultToDos } from './toDos';
import React, { useState, useMemo } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [toDos, setToDos] = useState(defaultToDos);

  console.log(toDos);
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
    setToDos((prevToDos) =>
      prevToDos.map((toDo) =>
        toDo.description === description
          ? { ...toDo, completed: !toDo.completed }
          : toDo
      )
    );
  };

  const deleteToDo = (description) => {
    setToDos((prevToDos) =>
      prevToDos.filter(
        (toDo) => toDo.description !== description
      )
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
