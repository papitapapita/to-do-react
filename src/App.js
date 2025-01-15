//import { defaultToDos } from './utils/toDos';
import { useLocalStorage } from './hooks/useLocalStorage';
import React, { useState, useMemo } from 'react';
import { AppUI } from './components/AppUI';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const {
    items: toDos,
    saveItems: setToDos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1');

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
    <AppUI
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      addToDo={addToDo}
      deleteToDo={deleteToDo}
      toggleCompletion={toggleCompletion}
      filteredToDos={filteredToDos}
      totalCompletedToDos={totalCompletedToDos}
      totalToDos={totalToDos}
      loading={loading}
      error={error}
    />
  );
}

export default App;
