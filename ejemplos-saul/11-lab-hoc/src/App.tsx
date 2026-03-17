import "./App.css";
import Boton from "./components/Boton";
import InfoUsuario from "./components/InfoUsuario";
import withData from "./hoc/withData";
import withHover from "./hoc/withHover";
import { SpinnerDotted } from 'spinners-react'

function App() {
  const BotonWithHover = withHover(Boton);
  const InfoUsuarioWithData = withData(InfoUsuario, 
                                       'https://randomuser.me/api/',
                                       <SpinnerDotted size={50} thickness={100} speed={100} color="#36ad47" />);
  
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
