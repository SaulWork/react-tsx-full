import React, { ReactNode } from "react";

const styles = {
  padding: "8px 12px",
  border: "1px solid black",
  borderRadius: "5px",
  backgroundColor: "white",
};

type Props = {
  children: ReactNode;
  handleClick: () => void;
};

const Boton: React.FC<Props> = ({ children, handleClick }) => {
  return (
    <button type="button" onClick={handleClick} style={styles}>
      {children}
    </button>
  );
};

export default Boton;
