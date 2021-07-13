import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const { setLogeado, logeado } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logearUsuario = async (e) => {
    e.preventDefault();
    const credenciales = { user: username, pass: password };
    const resp = await fetch(
      "https://ejercicio-08.herokuapp.com/usuarios/login",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciales),
      }
    );
    if (resp.ok) {
      const { token } = await resp.json();
      localStorage.setItem("token", token);
      setLogeado(true);
    } else {
      console.log("ERRORSITOJIJI");
    }
  };
  return (
    <form noValidate onSubmit={logearUsuario}>
      <label>
        Usuario{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label>
        Password{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <button type="submit">Login</button>
    </form>
  );
};
