import './App.css';
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { AddToDoButton } from './AddToDoButton';
import { toDos as defaultToDos } from './toDos';
import React, { useState, useMemo } from 'react';

function useLocalStorage(storageName, initialState = []) {
  const localStorageItems =
    localStorage.getItem(storageName);

  if (!localStorageItems) {
    localStorage.setItem(
      storageName,
      JSON.stringify(initialState)
    );
  }

  const [items, setItems] = React.useState(
    JSON.parse(localStorageItems)
  );

  function saveItems(newItems) {
    localStorage.setItem(
      storageName,
      JSON.stringify(newItems)
    );

    setItems(newItems);
  }

  return [items, saveItems];
}

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [toDos, setToDos] = useLocalStorage(
    'TODOS_V1',
    defaultToDos
  );

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
  };

  const deleteToDo = (description) => {
    const newToDos = toDos.filter(
      (toDo) => toDo.description !== description
    );

    setToDos(newToDos);
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
