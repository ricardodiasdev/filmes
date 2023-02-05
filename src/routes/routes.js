import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Film from '../pages/Film';
import Erro404 from '../pages/Erro404';
import Favoritos from '../pages/Favoritos';

import Header from '../components/Header';


const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='filme/:id' element={<Film/>}/>
        <Route path='favoritos' element={<Favoritos/>}/>

        <Route path='*' element={<Erro404/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
