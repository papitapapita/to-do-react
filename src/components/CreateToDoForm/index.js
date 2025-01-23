import React, { useContext, useRef } from 'react';
import { ToDoContext } from '../ToDoContext';
import './CreateToDoForm.css';

export function CreateToDoForm() {
  const { setOpenModal, addToDo } = useContext(ToDoContext);
  const textareaRef = useRef(null);
  return (
    <form className="create-todo-form">
      <h2 className="create-todo__title">
        Create New To Do
      </h2>
      <textarea
        className="create-todo__text"
        ref={textareaRef}
        required
      ></textarea>
      <div className="form-buttons">
        <input
          className="create-todo__button create-todo__button--cancel"
          type="button"
          value="cancel"
          onClick={() => {
            setOpenModal(false);
          }}
        />
        <input
          className="create-todo__button create-todo__button--create"
          type="button"
          value="create"
          onClick={() => {
            if (textareaRef.current) {
              addToDo(textareaRef.current.value.trim());
              setOpenModal(false);
            }
          }}
        />
      </div>
    </form>
  );
}
