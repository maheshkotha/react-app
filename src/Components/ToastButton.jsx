import React, { useState } from 'react';
import Toast from './Toast'; // Import the Toast component

const ToastButton = () => {
  const [toasts, setToasts] = useState([]);

  const handleClick = () => {
    const newToast = {
      id: Date.now(), // Unique ID for each toast
      message: `Toast message at ${new Date().toLocaleTimeString()}`,
    };
    setToasts([...toasts, newToast]);
  };

  const handleClose = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      <button onClick={handleClick} style={styles.button}>
        Show Toast
      </button>

      <div style={{position: 'fixed', top:'30px', right: '30px', width: '300px', height: 'auto', display: 'flex', flexDirection:'column', gap: '8px'}}>

      
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          duration={3000} // Toast will disappear after 3 seconds
          onClose={() => handleClose(toast.id)}
        />
      ))}
      </div>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default ToastButton;
