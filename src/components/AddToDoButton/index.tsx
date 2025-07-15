import { Dispatch, SetStateAction } from 'react';
import './AddToDoButton.css';

export function AddToDoButton({
  setOpenCreateToDo,
}: {
  setOpenCreateToDo: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="add-button"
      type="button"
      value="+"
      onClick={() => {
        setOpenCreateToDo((state: boolean) => !state);
      }}
    >
      +
    </button>
  );
}
