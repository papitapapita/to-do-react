import { ReactNode } from 'react';
import './Modal.css';
import { createPortal } from 'react-dom';

function Modal({ children }: { children: ReactNode }) {
  const modal = document.getElementById('modal');

  if (!modal) {
    throw new Error('There must be a modal element');
  }

  return createPortal(
    <div className="modal-background">{children}</div>,
    modal
  );
}

export { Modal };
