import './ToDoIcon.css';
import { FaCheck as CheckSVG } from 'react-icons/fa6';
import { FaX as DeleteSVG } from 'react-icons/fa6';

const iconTypes = {
  completed: <CheckSVG />,
  delete: <DeleteSVG />,
};

interface ToDoIconProps {
  type: 'delete' | 'completed';
  onClick: () => void;
}

export function ToDoIcon({ type, onClick }: ToDoIconProps) {
  return (
    <div
      className={`to-do__${type}-logo to-do__logo`}
      onClick={onClick}
    >
      {iconTypes[type]}
    </div>
  );
}
