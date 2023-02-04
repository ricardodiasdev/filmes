
import { useEffect, useState } from "react";
import api from "../../services/api";
import './home.css'

import { Link } from "react-router-dom";

const nowPlaying = process.env.REACT_APP_API_NOW_PLAYING
const apiKey = process.env.REACT_APP_API_KEY
const language = process.env.REACT_APP_LANGUAGE

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(nowPlaying, {
        params: {
          api_key: apiKey,
          language:  language,
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
