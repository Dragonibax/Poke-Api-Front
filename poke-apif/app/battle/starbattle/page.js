import React, { useState, useEffect } from 'react';

const Starbattle = () => {
  const [pokemonOptions, setPokemonOptions] = useState([]);
  const [attackOptions, setAttackOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Simulación de una solicitud para obtener datos de Pokémon y ataques
    // Reemplaza la URL con la verdadera URL de tu API
    const fetchData = async () => {
      try {
        const pokemonResponse = await fetch('https://api.example.com/pokemon');
        const attackResponse = await fetch('https://api.example.com/attacks');

        const pokemonData = await pokemonResponse.json();
        const attackData = await attackResponse.json();

        setPokemonOptions(pokemonData);
        setAttackOptions(attackData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []); // La dependencia vacía asegura que la solicitud se realice solo una vez al montar el componente

  const handleSelection = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza acciones según la opción seleccionada
    // Puedes realizar acciones específicas para Pokémon y ataques aquí

    // Reinicia el estado para las nuevas opciones
    setSelectedOption(null);
  };
  return (
    <div>
      <h1>Mi Página</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Selecciona un Pokémon:
          <select value={selectedOption} onChange={handleSelection}>
            {pokemonOptions.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Continuar</button>
      </form>

      {selectedOption && (
        <div>
          <h2>Información para {selectedOption}</h2>
          {/* Muestra información específica según el Pokémon seleccionado */}
          {/* ... */}
        </div>
      )}

      {selectedOption && (
        <div>
          <h2>Elige un ataque:</h2>
          <select value={selectedOption} onChange={handleSelection}>
            {attackOptions.map((attack) => (
              <option key={attack.id} value={attack.name}>
                {attack.name}
              </option>
            ))}
          </select>
          <button type="submit">Continuar</button>
        </div>
      )}
    </div>
  );
};

export default Starbattle;