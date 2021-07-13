import { useEffect, useState } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Cabecera } from "./components/Cabecera";
import { Inicio } from "./components/Inicio";
import { Listado } from "./components/Listado";
import { Login } from "./components/Login";

function App() {
  const [logeado, setLogeado] = useState(false);

  // const actualizarApi = async () => {
  //   const resp = await fetch("http://localhost:4000/");
  //   const json = await resp.json();

  //   setTextoApi(json.mensaje);
  // };

  // if (textoApi === "") {
  //   actualizarApi();
  // }
  return (
    <>
      <Router>
        <Cabecera logeado={logeado} setLogeado={setLogeado} />
        <Switch>
          <Route path="/listado" exact>
            <Listado logeado={logeado} />
          </Route>
          <Route path="/inicio" exact>
            <Inicio logeado={logeado} />
          </Route>
          <Route path="/login" exact>
            <Login setLogeado={setLogeado} logeado={logeado} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
