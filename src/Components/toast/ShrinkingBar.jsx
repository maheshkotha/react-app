import React, { useState } from 'react';

const ShrinkingBar = ({duration}) => {
  const [showBar, setShowBar] = useState(true);

  const handleStartAnimation = () => {
    setShowBar(true);
    setTimeout(() => {
      setShowBar(false);
    }, duration); // Hide the bar after the animation is complete
  };

  return (
    <div style={{position: 'absolute', bottom: '0', left: '0', width: '100%'}}>
      {/* <button onClick={handleStartAnimation} style={styles.button}>
        Start Animation
      </button> */}

      {showBar && <div className="shrinking-bar" style={styles.bar}></div>}
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
    marginBottom: '10px',
  },
  bar: {
    backgroundColor: '#007BFF',
    height: '2px',
    width: '100%', // Start with full width
  },
};

export default ShrinkingBar;

