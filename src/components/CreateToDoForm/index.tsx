import { useRef, Dispatch, SetStateAction } from 'react';
import './CreateToDoForm.css';

interface CreateToDoFormProps {
  setOpenCreateToDo: Dispatch<SetStateAction<boolean>>;
  addToDo: (toDoText: string) => void;
}

export function CreateToDoForm({
  setOpenCreateToDo,
  addToDo,
}: CreateToDoFormProps) {
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
            setOpenCreateToDo(false);
          }}
        />
        <input
          className="create-todo__button create-todo__button--create"
          type="button"
          value="create"
          onClick={() => {
            if (
              textareaRef.current &&
              textareaRef.current.value.length > 0
            ) {
              addToDo(textareaRef.current.value.trim());
              setOpenCreateToDo(false);
            }
          }}
        />
      </div>
    </form>
  );
}
