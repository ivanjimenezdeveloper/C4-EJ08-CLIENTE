import { useHistory } from "react-router-dom";

export const Inicio = (props) => {
  const { logeado } = props;
  const history = useHistory();
  if (!logeado) history.push("/login");

  return <p>Bienvenido master</p>;
};
