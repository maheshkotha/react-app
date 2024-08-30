import React from "react";
import { useTheme } from "../Providers/ThemeProvider";
import ToggleTheme from "../Features/ToggleTheme";
import ToastButton from "./toast/ToastButton";
import GetPagination from "./pagination/GetPagination";
import Posts from "./posts/Posts";

const styles = {
  appContainer: {
    textAlign: "center",
    marginTop: "50px",
  },
};

const Main = () => {
  const { theme } = useTheme();
  return (
    <div className={`main ${theme}`} style={{padding: '4rem'}}>
      <h1>React Theme</h1>
      <ToggleTheme />
      <div style={styles.appContainer}>
        <h1>Custom Toast Example</h1>
        <ToastButton />
      </div>
      <div>
        <GetPagination />
      </div>

      <div style={{padding: '2rem'}}>
        <h1>Users and Posts</h1><br />
        <Posts />
      </div>
    </div>
  );
};

export default Main;
