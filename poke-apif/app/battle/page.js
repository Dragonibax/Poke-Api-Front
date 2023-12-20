import Link from "next/link";

import commonStyles from '../user/common-styles.module.css';
/* <div className={`${commonStyles.backgroundContainercombat} ${commonStyles.pageContainercombat}`}>*/
export default function battle ( ) {
  return (
    <>
   
      <div className="battle-content">
        <h1 className="battletitles">Sección de combates</h1>
        <div className=".battletext">
        <p>
          Bienvenidos a la zona de combates Pokemon
        </p>
        
        <h1 className={`${commonStyles.battletitles}`}>Sección de combates</h1>
        <p className={`${commonStyles.battletitles2}`}>En la sección de combates de un juego de Pokémon, el jugador tiene la oportunidad de enfrentarse a otros Pokémon en emocionantes duelos. Al inicio del combate, se presenta una pantalla donde puedes elegir de tu equipo el Pokémon con el que deseas luchar. Cada Pokémon tiene sus propias habilidades y estadísticas, incluyendo tipos de movimientos como ataque, defensa, y habilidades especiales.</p>
        
        <br></br> 
        <p>Estos son los pasos a seguir dentro de los combates:</p>
        <br></br>

        <ol style={{ listStylePosition: "inside" }}>
          <li style={{ textAlign: "center", marginLeft: "1em" }}>Presiona iniciar batalla.</li>
          <li style={{ textAlign: "center", marginLeft: "1em" }}>Selecciona al Pokémon con el que deseas combatir.</li>
          <li style={{ textAlign: "center", marginLeft: "1em" }}>Selecciona un ataque para tu Pokémon.</li>
          <li style={{ textAlign: "center", marginLeft: "1em" }}>Selecciona el tiempo a apostar.</li>
          <li style={{ textAlign: "center", marginLeft: "1em" }}>Combate.</li>
        </ol>
        <br></br>
        <p>Una vez finalizado el combate, tendrás el resultado de la batalla.</p>
  
        <Link className="btn10" href={"/battle/starbattle"}>
          Iniciar Batalla
        </Link>
      </div>
      </div>
    </>
  );
  /*<div className={`${commonStyles.backgroundContainercombat} ${commonStyles.pageContainercombat}`}>*/
  }
