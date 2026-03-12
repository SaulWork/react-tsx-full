import noticias from "./data/noticias.json";
import Noticia from "./components/Noticia";

function App() {
  return (
    <>
      <div>
        {noticias.map((noticia) => (
          <Noticia key={noticia.id} {...noticia} />
        ))}
      </div>
    </>
  );
}

export default App;
