import { useState } from 'react';

import { useGlobalThemeContext } from './context/GlobalTheme/GlobalThemeProvider';

import '@/styles/main.scss';
import './App.scss';

function App() {
  const { theme, setThemeState } = useGlobalThemeContext();

  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Vite + React</h1>
      <div className="app__card">
        <h2>Current Theme: {theme}</h2>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button
          type="button"
          className="app__theme-btn"
          onClick={() => setThemeState({ theme: 'light' })}
        >
          Change to Light
        </button>

        <button
          type="button"
          className="app__theme-btn"
          onClick={() => setThemeState({ theme: 'dark' })}
        >
          Change to dark
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
