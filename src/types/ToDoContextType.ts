import { ToDo } from './ToDo';

export interface ToDoContextType {
  setSearchValue: (value: string) => void;
  searchValue: string;
  addToDo: (toDoText: string) => void;
  deleteToDo: (description: string) => void;
  toggleCompletion: (description: string) => void;
  filteredToDos: ToDo[];
  totalCompletedToDos: number;
  totalToDos: number;
  loading: boolean;
  error: boolean;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  showModal: () => void;
}
