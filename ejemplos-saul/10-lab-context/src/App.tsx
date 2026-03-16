import "./App.css";
import React, { useState } from "react";

import CmpConsumidor from './components/CmpConsumidor';

export const ThemeContext = React.createContext({});

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const stylesThemeMode = darkMode
    ? {
        backgroundColor: "black",
        color: "white",
      }
    : {
        backgroundColor: "white",
        color: "black",
      };

  return (
    <div>
    <button type="button" onClick={() => setDarkMode(!darkMode)}>Activado {darkMode ? 'ἱ' : 'ἱ'}</button>
          <ThemeContext.Provider value={stylesThemeMode}>
            <CmpConsumidor />
          </ThemeContext.Provider>
        </div>
  );
}
export default App;
