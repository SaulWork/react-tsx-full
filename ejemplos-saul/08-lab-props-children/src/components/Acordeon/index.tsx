import { useState, useEffect, JSX } from "react";
import "./Acordeon.css";

type Props = {
  children: JSX.Element;
  titulo: string;
  cerrado?: boolean;
};

const Acordeon: React.FC<Props> = ({ children, titulo, cerrado = true }) => {

  const [estaCerrado, setEstaCerrado] = useState<boolean | null>(null);


  useEffect(() => {
    setEstaCerrado(cerrado);
  }, [cerrado]);


  return (
    <div className="acordeon">
      <div className="acordeon-heading" onClick={() => setEstaCerrado(!estaCerrado)}>
        <h3>{titulo}</h3>
      </div>
      <div className={"acordeon-content " + (estaCerrado ? "cerrado" : "abierto")}>
        {children}
      </div>
    </div>
  );
};

export default Acordeon;
