import Sugus from "./components/Sugus";
import "./App.css";

function App() {
  return (
    <div>
      <Sugus sabor="limón" color="#FDE23A" />
      <Sugus sabor="naranja" color="#F28E40" />
      <Sugus sabor="piña" color="#227BBE" />
      <Sugus sabor="cereza" color="#AD3B52" />
      <Sugus sabor="fresa" color="#EA464C" />
    </div>
  );
}

export default App;
