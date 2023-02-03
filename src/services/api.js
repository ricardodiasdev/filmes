import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da api /movie/now_playing?api_key=c77e9ff67959672dd16a018876f5ab28&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
