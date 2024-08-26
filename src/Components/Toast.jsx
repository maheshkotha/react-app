import React, { useState, useEffect } from 'react';

const Toast = ({ message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div style={styles.toastContainer}>
      <div style={styles.toastMessage}>{message}</div>
      <div onClick={onClose} style={{cursor: 'pointer'}}>X</div>
    </div>
  );
};

const styles = {
  toastContainer: {
    position: 'relative',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    opacity: 0.9,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem'
  },
  toastMessage: {
    fontSize: '16px',
  },
};

export default Toast;
