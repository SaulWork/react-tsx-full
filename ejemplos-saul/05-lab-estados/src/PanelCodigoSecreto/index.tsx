import React, { Component } from "react";

class PanelCodigoSecreto extends Component<
  {},
  { codigoSecreto: string; codigoActual: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      codigoSecreto: "3038",
      codigoActual: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: any) {
    const teclaPulsada = event.target.textContent;
    const { codigoActual } = this.state;
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

    this.setState({ codigoActual: nuevoCodigoActual });
  }

  render() {
    return (
      <div className="panel-codigo-secreto">
        <div className="display">{this.state.codigoActual}</div>
        <div className="teclas" onClick={this.handleClick}>
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
  }
}

export default PanelCodigoSecreto;
