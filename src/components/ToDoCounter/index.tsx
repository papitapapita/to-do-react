import './ToDoCounter.css';
import { useToDoContext } from '../../hooks/useToDoContext';

export function ToDoCounter() {
  const { totalCompletedToDos, totalToDos, loading } =
    useToDoContext();
  const isCompleted = totalCompletedToDos === totalToDos;
  return (
    <h1 className="title">
      {loading && <b>Loading...</b>}
      {!loading &&
        (isCompleted ? (
          <b className="title__completed">
            You have completed everything
          </b>
        ) : (
          <span>
            You have completed {totalCompletedToDos} of{' '}
            {totalToDos} tasks
          </span>
        ))}
    </h1>
  );
}
