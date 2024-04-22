import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';

function PokemonDetails() {
  const { pokemonDetails, pokemonList, setSelectedPokemon } = useContext(PokemonContext);
  const { pokemonName } = useParams();

  useEffect(() => {
    setSelectedPokemon(pokemonName);
  }, [pokemonName, setSelectedPokemon]);
  
  const pokemon = pokemonList.find(poke => poke.name === pokemonName);

  if (!pokemon) {
    return <div>Pokemon no encontrado</div>;
  }
  return (
    <div className='contendor'>
      <div className='pokemon-info'>
        <img className="pokemon-img"src={pokemonDetails?.sprites?.other?.home?.front_default} alt={pokemonDetails?.name} />
        <div className='pokemon-details'>
          <h2>{pokemonDetails?.name}</h2>
    
          {pokemonDetails?.stats?.map(stat => (
            <ul>
              <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
            </ul>
          ))}
          {pokemonDetails?.types?.map(typeData => (
              <p key={typeData.slot}>{typeData.type.name}</p>
          ))}
        </div>
        </div>
    </div>


  );
}

export default PokemonDetails;

