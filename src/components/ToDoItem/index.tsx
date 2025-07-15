import './ToDoItem.css';
import { DeleteIcon, CompleteIcon } from '../';

interface ToDoItemProps {
  description: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
}
function ToDoItem({
  description,
  completed,
  onComplete,
  onDelete,
}: ToDoItemProps) {
  return (
    <li
      className={`to-do ${completed ? 'to-do--completed' : ''}`}
    >
      <CompleteIcon onComplete={onComplete} />
      <p className="to-do__text">{description}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { ToDoItem };
