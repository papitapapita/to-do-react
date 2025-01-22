import React from 'react';
import { AppUI } from './components/AppUI';
import { ToDoProvider } from './components/ToDoContext';

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
