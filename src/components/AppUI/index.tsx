import { useContext } from 'react';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoItem } from '../ToDoItem';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { AddToDoButton } from '../AddToDoButton';
import { LoadingItem } from '../LoadingItem';
import { Modal } from '../Modal';
import { CreateToDoForm } from '../CreateToDoForm';
import { useToDoContext } from '../../hooks/useToDoContext';

export function AppUI() {
  const {
    loading,
    error,
    filteredToDos,
    toggleCompletion,
    deleteToDo,
    openModal,
    setOpenModal,
  } = useToDoContext();

  return (
    <div className="App">
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        {loading &&
          new Array(4)
            .fill(0)
            .map((_, index) => <LoadingItem key={index} />)}
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
            onDelete={() => deleteToDo(toDo.description)}
          />
        ))}
      </ToDoList>

      {!loading && (
        <AddToDoButton setOpenModal={setOpenModal} />
      )}

      {openModal && (
        <Modal>
          <CreateToDoForm />
        </Modal>
      )}
    </div>
  );
}
