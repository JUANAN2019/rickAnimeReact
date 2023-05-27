import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/Main';
import Characters from './Components/Characters';
import NavCompleto from './Components/NavCompletoS';
import Carrusel from './Components/Carrusel';
import Formulario from './Components/Formulario';
import React from 'react';

import Footer from './Components/Footer';
import AnimePage from './Components/AnimePage';
import UserPage from './Components/UserPage';
import Inicio from './Components/Inicio';
import Video from './Components/Video'

function App() {
  return (
    <>
      <NavCompleto />
      <Carrusel />
      <BrowserRouter>
         <Routes >
          <Route path='/Inicio' element={<Inicio/>}></Route>
          <Route path='/Rick and Morty' element={<Mainpage />}></Route>
          <Route path='/characters/:id' element={<Characters />}></Route>
          <Route path="/suscriptores" element={<UserPage />} />
          <Route path="/animes" element={<AnimePage />} />
        </Routes>
      </BrowserRouter>
      <Video />
      <Formulario />
      <Footer />
    </>
  );
}
export default App;