import React from 'react'
import pikachu from '../assets/pikachu.png'

const Home = () => {
  return (
    <div className='contenedor'>
      <h1>Bienvenido maestro pokemon</h1>
      <img src={pikachu} className='pikachu'/>
    </div>
    
  )
}

export default Home