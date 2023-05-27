import React, { useEffect, useState } from 'react'
import { allCharacters } from './functions/Functions'
import './Main.css'

const Mainpage = () => {
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        allCharacters(setCharacters)
    }, [])

    return (
        <div className="contenedor-card">
            {characters != null ? (
                characters.map(characters => (
                    <div key={characters.id}>
                        <div className="cardapp">
                            <img src={characters.image} alt="" />
                            <div className="cardapp-body">
                                <a href={`/characters/${characters.id}`}>➡️ {characters.name}</a>
                            </div>
                        </div>
                    </div>
                ))
            ) : ('there is no characters')}

        </div>
    )
}

export default Mainpage