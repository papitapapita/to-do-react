import './DeleteIcon.css';
import { ToDoIcon } from '../';

export function DeleteIcon({
  onDelete,
}: {
  onDelete: () => void;
}) {
  return <ToDoIcon type="delete" onClick={onDelete} />;
}
