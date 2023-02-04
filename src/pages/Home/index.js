import { useEffect, useState } from "react";
import api from "../../services/api";
import './home.css'

import { Link } from "react-router-dom";

// URL da api /movie/now_playing?api_key=c77e9ff67959672dd16a018876f5ab28&language=pt-BR
const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "c77e9ff67959672dd16a018876f5ab28",
          language: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.results.slice(0,10))
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if(loading){
    return(
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="className lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.id}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
