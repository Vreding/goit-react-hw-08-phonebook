import PropTypes from "prop-types";
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, IconClose, ModalBackdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {      
      onClose();      
    };
  };  
  
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    };
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });
  
  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <Button onClick={onClose}><IconClose /></Button>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;