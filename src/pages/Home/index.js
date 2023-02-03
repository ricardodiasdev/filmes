import { useEffect, useState } from "react";
import api from '../../services/api';

// URL da api /movie/now_playing?api_key=c77e9ff67959672dd16a018876f5ab28&language=pt-BR
const Home = () => {

  const [filmes,setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes () {
      const response = await api.get('movie/now_playing', {
        params:{
          api_key:'c77e9ff67959672dd16a018876f5ab28',
          language: 'pt-BR',
          page: 1,
        }
      })

      console.log(response.data.results)
    }

    loadFilmes()
  }, [])
  
  return (
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  );
};

export default Home;
