import React, { useCallback, useMemo, useState } from "react";
import Toast from "./Toast"; // Import the Toast component

const ToastButton = () => {
  const [toasts, setToasts] = useState([]);

  const handleClick = () => {
    const now = Date.now();
    const duration = 3000; // Toast will disappear after 3 seconds

    const newToast = {
      id: now, // Unique ID for each toast
      message: `Toast message at ${new Date().toLocaleTimeString()}`,
      endTime: now + duration, // Calculate the end time
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  

  const handleClose = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div>
      <button onClick={handleClick} style={styles.button}>
        Show Toast
      </button>

      <div style={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            endTime={toast.endTime}
            onClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  toastContainer: {
    position: "fixed",
    top: "30px",
    right: "30px",
    width: "300px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default ToastButton;
