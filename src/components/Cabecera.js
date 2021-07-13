import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

export const Cabecera = (props) => {
  const { logeado, setLogeado } = props;

  const history = useHistory();

  useEffect(() => {
    if (!logeado) {
      history.push("/login");
    }
  }, [history, logeado]);

  const logout = () => {
    localStorage.removeItem("token");
    setLogeado(false);
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/inicio" activeClassName="actual">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/listado" activeClassName="actual">
              Listado
            </NavLink>
          </li>
          {!logeado || (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
