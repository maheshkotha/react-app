import React, { useState, useEffect, useRef } from 'react';
import ShrinkingBar from './ShrinkingBar';

const Toast = ({id, message, duration, onClose, endTime }) => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    const now = Date.now();
    const timeRemaining = endTime - now;

    if (timeRemaining <= 0) {
      setVisible(false);
      onClose(id);
      return;
    }

    // Set the timer based on the remaining time
    timerRef.current = setTimeout(() => {
      setVisible(false);
      onClose(id);
    }, timeRemaining);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, [endTime, id, onClose]);

  if (!visible) return null;

  return (
    <div style={styles.toastContainer}>
      <div style={styles.toastMessage}>{message}</div>
      <div onClick={() =>onClose(id)} style={{cursor: 'pointer'}}>X</div>
      <ShrinkingBar duration={duration} />
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
