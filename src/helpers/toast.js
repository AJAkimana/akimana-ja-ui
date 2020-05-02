import React from 'react';

export const Toast = ({ show, onClose, title, message }) => {
  return (
    <Toast onClose={onClose} show={show} delay={3000} autohide>
      <Toast.Header>
        <strong className='mr-auto'>{title}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};
