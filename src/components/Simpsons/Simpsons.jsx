import React from 'react'
import './Simpsons.css'

const Simpsons = ({character, characterDirection, image, quote}) => {
  return (
    <div className='card'>
        <h2>Nombre:</h2>
        <h2>{character}</h2>
        <p>Dirección: {characterDirection}</p>
        <img src={image} alt={character} className='card-img'/>
        <p>Frase: {quote}</p>
    </div>
  )
}

export default Simpsons