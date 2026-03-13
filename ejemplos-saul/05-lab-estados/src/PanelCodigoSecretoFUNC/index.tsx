import { useState } from "react";

const PanelCodigoSecretoFUNC = () => {
  const [estado, setEstado] = useState<{
    codigoSecreto: string;
    codigoActual: string;
  }>({ codigoSecreto: "3038", codigoActual: "" });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const teclaPulsada = (event.target as HTMLElement).textContent;

    const { codigoActual } = estado;
    let nuevoCodigoActual = codigoActual;

    if (teclaPulsada === "CLD") {
      nuevoCodigoActual = "";
    } else if (teclaPulsada === "DEL") {
      nuevoCodigoActual = codigoActual.slice(0, -1);
    } else {
      if (codigoActual.length < 4) {
        nuevoCodigoActual = codigoActual + teclaPulsada;
      }
    }

    setEstado({ ...estado, codigoActual: nuevoCodigoActual });
  };

  return (
    <div className="panel-codigo-secreto">
      <div className="display">{estado.codigoActual}</div>
      <div className="teclas" onClick={handleClick}>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            1
          </button>
          <button type="button" className="tecla">
            2
          </button>
          <button type="button" className="tecla">
            3
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            4
          </button>
          <button type="button" className="tecla">
            5
          </button>
          <button type="button" className="tecla">
            6
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            7
          </button>
          <button type="button" className="tecla">
            8
          </button>
          <button type="button" className="tecla">
            9
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            CLD
          </button>
          <button type="button" className="tecla">
            0
          </button>
          <button type="button" className="tecla">
            DEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelCodigoSecretoFUNC;
