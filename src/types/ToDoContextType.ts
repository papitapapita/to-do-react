import { ToDo } from './ToDo';
import React from 'react';

export interface ToDoContextType {
  setSearchValue: React.Dispatch<
    React.SetStateAction<string>
  >;
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
  setOpenModal: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showModal: () => void;
}
