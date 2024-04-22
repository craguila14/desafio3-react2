import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        setPokemonList(data.results);
      })
      .catch(error => {
        console.error('Se produjo un error al obtener los datos:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
          }
          return response.json();
        })
        .then(data => {
          setPokemonDetails(data);
          console.log(pokemonDetails)
        })
        .catch(error => {
          console.error('Se produjo un error al obtener los detalles del Pokémon:', error);
        });
    }
  }, [selectedPokemon]);

  const handlePokemonChange = event => {
    setSelectedPokemon(event.target.value);
   
  };

  return (
    <PokemonContext.Provider value={{ handlePokemonChange, pokemonList, pokemonDetails, setPokemonDetails, setSelectedPokemon, selectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;


