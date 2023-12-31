'use client'
import React, { useState, useEffect, use } from 'react';
import Link from "next/link";
import { useUserContext } from '../../components/Context/UserContextProvider';
import { type } from 'os';

const Starbattle = () => {

  const { user } = useUserContext(); //para el usuario



  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [time, setAttackPower] = useState(null);
  const [fourthPokemonInfo, setFourthPokemonInfo] = useState(null);
  const [showFourthPokemon, setShowFourthPokemon] = useState(true);
  const [enemyselec, setEnemySelec] = useState(false);
  const [confirmedPokemon, setConfirmedPokemon] = useState(false);
  const [confirmedAttack, setConfirmedAttack] = useState(false);
  const [confirmedPower, setConfirmedPower] = useState(false);
  const [battleResult, setBattleResult] = useState(null);//para el envio de resultados
  const [botonPresionado, setBotonPresionado] = useState(false);
  const [botonPresionado2, setBotonPresionado2] = useState(false);
  const [selectedAttack, setSelectedAttack] = useState(null);


  let urlpokeinfo = 'http://localhost:3000/api/figth/pokemons';
  let urlpokebattle = 'http://localhost:3000/api/figth/start';

  const sabpokedata = [
    {
      "id": 1,
      "name": "Bulbasaur",
      "type": "Grass/Poison",
      "hp": 45,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 1, "name": "Tackle" },
        { "id": 2, "name": "Growl" },
        { "id": 3, "name": "Leech Seed" },
        { "id": 4, "name": "Vine Whip" }
      ]
    },
    {
      "id": 2,
      "name": "Charmander",
      "type": "Fire",
      "hp": 39,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 5, "name": "Scratch" },
        { "id": 6, "name": "Growl" },
        { "id": 7, "name": "Ember" },
        { "id": 8, "name": "Leer" }
      ]
    },
    {
      "id": 3,
      "name": "Squirtle",
      "type": "Water",
      "hp": 44,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 9, "name": "Tackle" },
        { "id": 10, "name": "Tail Whip" },
        { "id": 11, "name": "Bubble" },
        { "id": 12, "name": "Withdraw" }
      ]
    },
    {
      "id": 4,
      "name": "Pikachu",
      "type": "Electric",
      "hp": 35,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 13, "name": "Quick Attack" },
        { "id": 14, "name": "Thunder Shock" },
        { "id": 15, "name": "Tail Whip" },
        { "id": 16, "name": "Growl" }
      ]
    }
  ]

  /* //Quitar las proximas 3 lineas
              const data=sabpokedata;
              setPokemonData(data);
              setFourthPokemonInfo(data[3]); */


  useEffect(() => {
    // Realiza la petición a la API de Pokemon
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(urlpokeinfo);
        const data = await response.json();
        setPokemonData(data);
        console.log(data);
        // Muestra la información del cuarto Pokémon
        setFourthPokemonInfo(data[3]);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        //Quitar las proximas 3 lineas
        /*const data = sabpokedata;
        setPokemonData(data);
        setFourthPokemonInfo(data[3]);*/
      }
    };

    fetchPokemonData();
  }, []);

  const handlePokemonSelect = (pokemon) => {
    if (!confirmedPokemon) {
      setSelectedPokemon(pokemon);
      setSelectedAttack(null); // Reinicia la selección de ataques al cambiar de Pokemon
      setConfirmedAttack(false);
      setConfirmedPower(false);
    }
  };

  const handleAttackSelect = (attack) => {
    if (!confirmedAttack) {
      setSelectedAttack(attack);
      setConfirmedPower(false);
    }
  };

  const handleTimeSelect = (power) => {
    if (!confirmedPower) {
      setAttackPower(power);
    }
  };

  const handleConfirmPokemon = () => {
    setConfirmedPokemon(true);
  };

  const handleConfirmAttack = () => {
    setConfirmedAttack(true);
  };

  const handleConfirmTime = () => {
    setConfirmedPower(true);
  };

  const handleOkButton = () => {
    setBotonPresionado(true);
    setShowFourthPokemon(true);
    setEnemySelec(true);
  };



  /// para el envio de informacion a a la api y espera de la respuesta


  const handleBattleSubmit = async () => {
    try {
      const userData = {
        nombreUsuario: user.user,
        idPokemonUser: "" + selectedPokemon.id,
        moveUser: selectedAttack.name,
        idPokemonIA: "" + fourthPokemonInfo.id,
        moveIA: fourthPokemonInfo.moves[0].name,
        bet: "" + time,
      };

      let payload = [userData];

      const response = await fetch(urlpokebattle, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      setBattleResult(data);


    } catch (error) {
      console.error('Error submitting battle:', error);

      // Simulando respuesta de datos locales en caso de error
      /*
      const dataresult = {
        "isWiner": true,
        "nombrePokemon": selectedPokemon.name,
        "ataquePokemon": selectedAttack.name,
        "nombrePokeIA": fourthPokemonInfo,name,
        "ataquePokeIA": fourthPokemonInfo.AtaquePokeIA,
        "tiempo": "75"
      };
      


      setBattleResult(dataresult);

*/

    }
    setBotonPresionado2(true);
    // Limpiar la información y mostrar solo el resultado

  };

  return (
    <div className='battle-content'>
      {showFourthPokemon && (
        <div>
          <h3 className='battletitles'>Un pokemon Salvaje ha aparcido:</h3>
          {fourthPokemonInfo && (
            <div>
              <div>ID: {fourthPokemonInfo.id}, Nombre: {fourthPokemonInfo.name},
                Tipos: {<div>
                  {fourthPokemonInfo.type.map((tipo) => (
                    <p>{tipo}</p>
                  ))}
                </div>
                }</div>

              <img className='spritepokemonenemy' src={fourthPokemonInfo.imageAPI} alt={fourthPokemonInfo.name} />
            </div>
          )}
          <div className='pokesab' style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <button className='btn10' onClick={handleOkButton} disabled={botonPresionado} >COMBATIR</button>
            <Link className='btn10' href={"/battle"}>Escapar</Link>
          </div>
        </div>
      )}

      {showFourthPokemon && enemyselec && (
        <div>
          <h2 className='battletitles'>Selecciona un Pokemon:</h2>
          <div className='pokeselection' style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
            {pokemonData.slice(0, 3).map((pokemon) => (
              <div className='centerdiv' key={pokemon.id} onClick={() => handlePokemonSelect(pokemon)} style={{ cursor: 'pointer' }}>
                <p>{pokemon.name}</p>
                <div>
                  {pokemon.type.map((tipo) => (
                    <p>{tipo}</p>
                  ))}
                </div>
                <img className='spritepokemon' src={pokemon.imageAPI} alt={pokemon.name} style={{ maxWidth: '100px' }} />
              </div>
            ))}
          </div>

          {selectedPokemon && !confirmedPokemon && (
            <div>
              <p className='battletext'>Has seleccionado a: {selectedPokemon.name}</p>
              <button className='btn10' onClick={handleConfirmPokemon}>Confirmar Pokemon</button>
            </div>
          )}

          {confirmedPokemon && selectedPokemon && !confirmedAttack && (
            <div>
              <h3 >Selecciona un ataque para {selectedPokemon.name}:</h3>
              <div className='battletext' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
                {selectedPokemon.moves.map((moves) => (
                  <div className='centerdiv' key={moves.id} onClick={() => handleAttackSelect(moves)} style={{ cursor: 'pointer' }}>
                    <p className='btn6' >{moves.name}</p>
                  </div>
                ))}
              </div>
              {selectedAttack && (
                <div>
                  <p className='battletext'>Has seleccionado el ataque: {selectedAttack.name}</p>
                  <button className='btn10' onClick={handleConfirmAttack}>Confirmar Ataque</button>
                </div>
              )}
            </div>
          )}

          {confirmedAttack && selectedAttack && !confirmedPower && (
            <div>
              <h3 className='battletext'>Selecciona el tiempo a apostar:</h3>
              <div className='battletext' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', fontSize: '20' }}>
                <div onClick={() => handleTimeSelect(10)} style={{ cursor: 'pointer' }}>
                  <p className='btn10'>10</p>
                </div>
                <div onClick={() => handleTimeSelect(100)} style={{ cursor: 'pointer' }}>
                  <p className='btn10'>100</p>
                </div>
                <div onClick={() => handleTimeSelect(1000)} style={{ cursor: 'pointer' }}>
                  <p className='btn10'>1000</p>
                </div>
              </div>
              {time && (
                <div>
                  <p className='contime'>Has seleccionado la cantidad de tiempo: {time}</p>
                  <button className='btn10' onClick={handleConfirmTime}>Confirmar Tiempo</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

<div className='battletext' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '20' }}>
      {confirmedPower && selectedAttack && selectedPokemon && (
        <div className='contime'>
          <h3>Resumen:</h3>
          <p>Pokemon: {selectedPokemon.name}</p>
          <p>Tipo: {selectedPokemon.type}</p>
          <p>Ataque seleccionado: {selectedAttack.name}</p>
          <p>Tiempo apostado: {time}</p>
          <button className='btn10' onClick={handleBattleSubmit} disabled={botonPresionado2}>COMBATIR</button></div>

      )}



      {battleResult && (
        <div className='contime'> 
          <h3 className='redtitle'>Resultado de la Batalla:</h3>
          <br></br>
          <p className='titleimp'>Resultado del combate {battleResult.isUserWinner ? 'Victoria' : 'Derrota'}</p>
          <p>Nombre del Pokémon: {selectedPokemon.name}</p>
          <p>Nombre del Pokémon Enemigo: {fourthPokemonInfo.name}</p>
          <p>Numero de turnos: {battleResult.numberTurns}</p>
          <p>Tiempo: {battleResult.bet}</p>

          <Link className="btn10" href={"/battle"}>
            Finalizar combate 
          </Link>
        </div>
      )}

</div>

    </div>
  );
};

export default Starbattle;

