import "./App.css";
import Acordeon from "./components/Acordeon";
import reactLogo from "../src/logo.svg";

function App() {
  return (
    <div>
      <Acordeon titulo="Una lista de productos">
        <ul>
          <li>Albahaca</li>
          <li>Queso parmesano</li>
          <li>Pechuga de pollo</li>
          <li>Tomates</li>
        </ul>
      </Acordeon>
      <Acordeon titulo="Librería JS" cerrado={false}>
        <div>
          <h4>¿Que es React?</h4>
          <img src={reactLogo} width={50} height={50}
            alt="Logo de React"
          />
          <p>
            React es una librería de JS que permite pintar interfaces de
            usuario...
          </p>
        </div>
      </Acordeon>
    </div>
  );
}

export default App;
