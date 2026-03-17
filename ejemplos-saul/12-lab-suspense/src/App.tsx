import "./App.css";
import { Suspense, lazy, useState } from 'react';
import Inicio from "./components/Inicio";
const Admin = lazy(() => import('./components/Admin'));


function App() {
  const [esAdmin, setEsAdmin] = useState(false);

  return (
    <div>
        <button type="button" onClick={() => setEsAdmin(!esAdmin)}>Toggle admin</button>
        { 
          esAdmin ?
            <Suspense fallback={<p>Loading...</p>}>
              <Admin />
            </Suspense>
          :
          <Inicio />
        }
      </div>
  );
}
export default App;
