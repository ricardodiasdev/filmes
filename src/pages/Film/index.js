import {useEffect, useState} from "react";

import { useParams } from "react-router-dom";

import './filme.info.css'


import api from "../../services/api";

const Film = () => {

  const {id} = useParams();

  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  const apiKey = process.env.REACT_APP_API_KEY
  const language = process.env.REACT_APP_LANGUAGE


  useEffect(() => {

    const loadFilmePorId = async () => {
      await api.get(`/movie/${id}`,{
        params: {
          api_key: apiKey,
          language: language
        }
      })
      .then((response)=> {
        setFilme(response.data)
        setLoading(false)
      })
      .catch(() => {
        console.log("Filme não encontrado")
      })
    }

    loadFilmePorId()

    return () => {
      console.log("Componente desmontado.")
    }

  }, [apiKey, language, id])

  if(loading){
    return(
      <div className="filme-info">
        <h2>Carregando filmes...</h2>
      </div>
    )
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
        <button>Salvar</button>
        <button>
          <a href="#">Trailer</a>
        </button>
      </div>
    </div>
  );
};

export default Film;
