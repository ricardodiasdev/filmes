import { Link } from "react-router-dom";
import "./erro.css";

const Erro404 = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Veja todos os filmes</Link>
    </div>
  );
};

export default Erro404;
