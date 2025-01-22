import React, {
  createContext,
  useState,
  useMemo,
} from 'react';
import { useLocalStorage } from './useLocalStorage';
import PropTypes from 'prop-types';

const ToDoContext = createContext();

function ToDoProvider({ children }) {
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
    <ToDoContext.Provider
      value={{
        setSearchValue,
        searchValue,
        addToDo,
        deleteToDo,
        toggleCompletion,
        filteredToDos,
        totalCompletedToDos,
        totalToDos,
        loading,
        error,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };

ToDoProvider.propTypes = {
  children: PropTypes.object,
};
