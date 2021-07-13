import { useHistory } from "react-router-dom";

export const Listado = (props) => {
  const { logeado } = props;
  const history = useHistory();

  if (!logeado) history.push("/login");
  return <p>se viene un listado guapo</p>;
};
