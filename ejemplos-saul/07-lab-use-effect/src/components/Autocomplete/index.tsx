import React, { useState, useEffect } from "react";

type cocktail = {
  idDrink: string;
  strDrink: string;
};

const Autocomplete = () => {
  const [nombre, setNombre] = useState("");
  const [cocktails, setCocktails] = useState<cocktail[]>([]);

  useEffect(() => {
    if (nombre.length > 3) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`,
      )
        .then((resp) => resp.json())
        .then(({ drinks }) => {
          setCocktails(() => drinks || []);
        });
    }
  }, [nombre]);

  const selectCocktail = (cocktailSeleccionado: cocktail) => {
    setNombre(cocktailSeleccionado.strDrink);
  };

  const listaCocktails = cocktails.map((c) => (
    <li onClick={() => selectCocktail(c)} key={c.idDrink}>
      {c.strDrink}
    </li>
  ));

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <ul>{listaCocktails}</ul>
    </div>
  );
};

export default Autocomplete;
