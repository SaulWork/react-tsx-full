import type { NoticiaProps } from "./NoticiaProps";

const Noticia = ({ titulo, contenido }: NoticiaProps) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </div>
  );
};
export default Noticia;
