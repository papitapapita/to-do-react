import { useRef } from 'react';
import './CreateToDoForm.css';
import { useToDoContext } from '../../hooks/useToDoContext';

export function CreateToDoForm() {
  const { setOpenModal, addToDo } = useToDoContext();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
