import { useState, useEffect, ReactNode, ReactElement } from "react";
import "./Acordeon.css";

type Props = {
  children: ReactElement<React.HTMLAttributes<HTMLUListElement>, "ul">; // ReactNode;
  titulo: string;
  cerrado?: boolean;
};

const Acordeon: React.FC<Props> = ({ children, titulo, cerrado = true }) => {
  const [estaCerrado, setEstaCerrado] = useState<boolean>(cerrado);

  useEffect(() => {
    setEstaCerrado(cerrado);
  }, [cerrado]);

  return (
    <div className="acordeon">
      <div
        className="acordeon-heading"
        onClick={() => setEstaCerrado(!estaCerrado)}
      >
        <h3>{titulo}</h3>
      </div>
      <div
        className={"acordeon-content " + (estaCerrado ? "cerrado" : "abierto")}
      >
        {children}
      </div>
    </div>
  );
};

export default Acordeon;
