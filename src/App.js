import { useState } from "react";

function App() {
  const [textoApi, setTextoApi] = useState("");
  const actualizarApi = async () => {
    const resp = await fetch("http://localhost:4000/");
    debugger;
    const json = await resp.json();

    setTextoApi(json.mensaje);
  };

  if (textoApi === "") {
    actualizarApi();
  }
  return <p>{textoApi}</p>;
}

export default App;
