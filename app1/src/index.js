import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div style={{color: 'green'}}>React app with webpack</div>
  )
}


const root = createRoot(document.getElementById('root'));

root.render(<App />)