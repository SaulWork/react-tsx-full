import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import NuevoUsuario from "./components/NuevoUsuario";
import Usuario from "./components/Usuario";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <h1>React Router v6</h1>

      <Header />

      <Routes>
        <Route path="/usuarios" element={<Inicio />}>
          <Route path=":usuarioId" element={<Usuario />} />
        </Route>
        <Route path="/nuevo-usuario" element={<NuevoUsuario />} />
        <Route path="/" element={<Navigate to="/usuarios" replace={true} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
