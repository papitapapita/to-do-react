import {
  createContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ToDoContextType, ToDo } from '../../types';

const ToDoContext = createContext<
  ToDoContextType | undefined
>(undefined);

interface ToDoProviderProps {
  children: ReactNode;
}

function ToDoProvider({ children }: ToDoProviderProps) {
  const [searchValue, setSearchValue] = useState('');
  const {
    items: toDos,
    saveItems: setToDos,
    loading,
    error,
  } = useLocalStorage<ToDo>('TODOS_V1');
  const [openModal, setOpenModal] = useState(false);

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

  const toggleCompletion = (description: string) => {
    const newToDos = toDos.map((toDo) =>
      toDo.description === description
        ? { ...toDo, completed: !toDo.completed }
        : toDo
    );

    setToDos(newToDos);
  };

  const deleteToDo = (description: string) => {
    const newToDos = toDos.filter(
      (toDo) => toDo.description !== description
    );

    setToDos(newToDos);
  };

  const addToDo = (toDoText: string) => {
    const newToDo = {
      description: toDoText,
      completed: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const showModal = () => {
    setOpenModal(true);
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
        openModal,
        setOpenModal,
        showModal,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider };
