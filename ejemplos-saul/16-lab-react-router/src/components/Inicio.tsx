import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { User } from "../types";

const Inicio = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((usuarios) => setUsuarios(usuarios));
  }, []);

  const listaUsuarios = usuarios.map((u) => (
    <li key={u.id}>
      <span>{u.username}</span>
      <Link to={"/usuarios/" + u.id}> {' => '}Ver + info</Link>
    </li>
  ));

  return (
    <div>
      <h2>Inicio</h2>
      <ul>{listaUsuarios}</ul>
      <Outlet />
    </div>
  );
};

export default Inicio;
