import { ReactNode } from 'react';
import './ToDoList.css';

export function ToDoList({
  children,
}: {
  children: ReactNode;
}) {
  return <ul className="to-do-list">{children}</ul>;
}
