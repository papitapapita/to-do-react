import {
  ToDoCounter,
  ToDoItem,
  ToDoSearch,
  ToDoList,
  AddToDoButton,
  LoadingItem,
  Modal,
  CreateToDoForm,
} from './components';
import { useToDoContext } from './hooks';

function App() {
  const {
    loading,
    error,
    filteredToDos,
    toggleCompletion,
    deleteToDo,
    openModal,
    setOpenModal,
    searchValue,
    totalCompletedToDos,
    totalToDos,
    setSearchValue,
    addToDo,
  } = useToDoContext();

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
        <AddToDoButton setOpenModal={setOpenModal} />
      )}

      {openModal && (
        <Modal>
          <CreateToDoForm
            setOpenModal={setOpenModal}
            addToDo={addToDo}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
