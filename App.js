import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './src/Components/Main';
import Characters from './src/Components/Characters';
import NavCompleto from './src/Components/NavCompletoS';
import Carrusel from './src/Components/Carrusel';
import Formulario from './src/Components/Formulario';
import React from 'react';

import Footer from './src/Components/Footer';
import AnimePage from './src/Components/AnimePage';
import UserPage from './src/Components/UserPage';
import Inicio from './src/Components/Inicio';
import Video from './src/Components/Video'

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