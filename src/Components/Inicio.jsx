import React from 'react'
import { Link } from 'react-router-dom';
import './Inicio.css';

const Inicio = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Inicio"></Link>
          </li>
          <li>
            <Link to="/Rick and Morty"></Link>
          </li>
          <li>
            <Link to="/suscriptores"></Link>
          </li>
          <li>
            <Link to="/animes"></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Inicio