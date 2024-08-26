import React from "react";
import { useTheme } from "../Providers/ThemeProvider";
import ToggleTheme from "../Features/ToggleTheme";
import ToastButton from "./toast/ToastButton";

const styles = {
  appContainer: {
    textAlign: "center",
    marginTop: "50px",
  },
};

const Main = () => {
  const { theme } = useTheme();
  return (
    <div className={`main ${theme}`}>
      <h1>React Theme</h1>
      <ToggleTheme />
      <div style={styles.appContainer}>
        <h1>Custom Toast Example</h1>
        <ToastButton />
      </div>
    </div>
  );
};

export default Main;
