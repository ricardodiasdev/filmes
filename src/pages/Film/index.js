import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import "./filme.info.css";

import api from "../../services/api";

const Film = () => {
  const { id } = useParams();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate();

  const apiKey = process.env.REACT_APP_API_KEY;
  const language = process.env.REACT_APP_LANGUAGE;

  useEffect(() => {
    const loadFilmePorId = async () => {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: apiKey,
            language: language,
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigation("/", { raplace: true });
          return;
        });
    };

    loadFilmePorId();

    return () => {
      console.log("Componente desmontado.");
    };
  }, [apiKey, language, id, navigation]);

  const salvarFilme = () => {
    const minhaLista = localStorage.getItem("@resumoFilmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];
    const hasFilm = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );
    if (hasFilm) {
      alert("Esse filme já está na lista");
      return;
    }
    filmesSalvos.push(filme);
    localStorage.setItem("@resumoFilmes", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso");
    
  };

  if (loading) {
    return (
      <div className="filme-info">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.id}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>
      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results?search_query=${filme.title} trailers`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Film;
