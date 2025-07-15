import './CompleteIcon.css';
import { ToDoIcon } from '../';

export function CompleteIcon({
  onComplete,
}: {
  onComplete: () => void;
}) {
  return <ToDoIcon type="completed" onClick={onComplete} />;
}
