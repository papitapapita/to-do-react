import React from 'react';
import './AddToDoButton.css';

export function AddToDoButton({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) {
  return (
    <button
      className="add-button"
      type="button"
      value="+"
      onClick={() => {
        setOpenModal((state: boolean) => !state);
      }}
    >
      +
    </button>
  );
}
