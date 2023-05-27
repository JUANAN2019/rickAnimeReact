import React, { useEffect, useState } from 'react'
import './characters.css'
import { useParams } from 'react-router-dom'
import { uniqueCharacter } from './functions/Functions'

const CharacterList = () => {
  const [characters, setCharacters] = useState(null)

  const params = useParams()
  useEffect(() => {
    uniqueCharacter(params.id, setCharacters)
  }, [params.id])

  return (
    <div className="contenedorCharacter">
      {characters != null ? (
        <div className='Character'>
          <div className="card-body">
            <h2><strong>Character Id: </strong>{params.id}</h2>
            <p><strong>Character Name: </strong> {characters.name}</p>
            <p><strong>Species: </strong> {characters.species}</p>
            <p> <strong>Gender: </strong>  {characters.gender}</p>
            <p><strong>Status: </strong>{characters.status}</p>
            <div className="card">
              <img src={characters.image} alt="" />
            </div>
          </div>
        </div>
      ) : ('there is no characters')}
    </div>
  )
}

export default CharacterList;
