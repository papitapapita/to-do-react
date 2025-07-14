import './ToDoCounter.css';
interface ToDoCounterProps {
  totalCompletedToDos: number;
  totalToDos: number;
  loading: boolean;
}

export function ToDoCounter({
  totalCompletedToDos,
  totalToDos,
  loading,
}: ToDoCounterProps) {
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
