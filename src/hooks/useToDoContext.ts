import { useContext } from 'react';
import { ToDoContext } from '../components/ToDoContext';

export const useToDoContext = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error(
      'useToDoContext must be used within a ToDoProvider'
    );
  }
  return context;
};
