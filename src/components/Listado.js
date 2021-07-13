import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Listado = (props) => {
  const { logeado } = props;
  const history = useHistory();
  const [listado, setListado] = useState([]);

  const extraerListadoItems = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const resp = await fetch(
      "https://ejercicio-08.herokuapp.com/items/listado",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const datos = await resp.json();
    setListado(datos);
  };

  if (!logeado) {
    history.push("/login");
  }
  useEffect(() => extraerListadoItems(), [logeado]);

  return listado.length > 0 ? (
    <ul>
      {listado.map((objeto) => (
        <li>{objeto}</li>
      ))}
    </ul>
  ) : (
    <p>No hay datos que mostrar</p>
  );
};
