import { useEffect } from 'react';
import {
  ToDoCounter,
  ToDoItem,
  ToDoSearch,
  ToDoList,
  AddToDoButton,
  LoadingItem,
  Modal,
  CreateToDoForm,
  ChangeAlert,
} from './components';
import { useToDoContext } from './hooks';

function App() {
  const {
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
    openCreateToDo,
    setOpenCreateToDo,
    openChangeAlert,
    setOpenChangeAlert,
  } = useToDoContext();

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      console.log('Storage event detected:', event);
      if (event.key === 'TODOS_V1') {
        console.log('TODOS_V1 changed, opening alert');
        setOpenChangeAlert(true);
      }
    };

    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <ToDoCounter
          totalCompletedToDos={totalCompletedToDos}
          totalToDos={totalToDos}
          loading={loading}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </header>

      <ToDoList>
        {loading &&
          new Array(4)
            .fill(0)
            .map((_, index) => <LoadingItem key={index} />)}
        {error && <p>There was a problem!</p>}
        {!loading &&
          filteredToDos.length === 0 &&
          searchValue.length === 0 && (
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
        {!loading &&
          !error &&
          searchValue.length > 0 &&
          filteredToDos.length === 0 && (
            <p>No matches with {searchValue}</p>
          )}
      </ToDoList>

      {!loading && (
        <AddToDoButton
          setOpenCreateToDo={setOpenCreateToDo}
        />
      )}

      {openCreateToDo && (
        <Modal>
          <CreateToDoForm
            setOpenCreateToDo={setOpenCreateToDo}
            addToDo={addToDo}
          />
        </Modal>
      )}

      {openChangeAlert && (
        <Modal>
          <ChangeAlert
            show={openChangeAlert}
            setOpenChangeAlert={setOpenChangeAlert}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
