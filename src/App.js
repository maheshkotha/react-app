import './App.css';
import Main from './Components/Main';
import ToggleTheme from './Features/ToggleTheme';
import { ThemeProvider } from './Providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
