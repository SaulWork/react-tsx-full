import "./App.css";
import Boton from "./components/Boton";
import InfoUsuario from "./components/InfoUsuario";
import withData from "./hoc/withData";
import withHover from "./hoc/withHover";

function App() {
  const BotonWithHover = withHover(Boton);
  const InfoUsuarioWithData = withData(InfoUsuario, 'https://randomuser.me/api/');
  
  return (
     <div>
        <Boton handleClick={() => alert('Hola mundo!!!')}>Saludar al mundo</Boton>
        <BotonWithHover handleClick={() => alert('Bienvenid@s...')}>Dar bienvenida</BotonWithHover>
        <hr />
         <InfoUsuarioWithData />
      </div>
  );
}
export default App;
