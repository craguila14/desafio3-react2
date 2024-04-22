
import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom';

function PokemonSelector() {
  const { pokemonList, selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  const handlePokemonChange = event => {
    setSelectedPokemon(event.target.value);
  };

  const handleShowPokemon = () => {
    navigate(`/pokemones/${selectedPokemon}`);
  };
  
  return (
    <div className='contenedor'>
      <h1><label htmlFor="pokemon-select">Selecciona un Pokémon:</label></h1>
      <select
        className='select'
        id="pokemon-select"
        value={selectedPokemon}
        onChange={handlePokemonChange}
      >
        <option value="">Pokemon</option>
        {pokemonList.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>
      <button className="boton" onClick={handleShowPokemon}>Ver detalles</button>
    </div>
  );
}

export default PokemonSelector;
