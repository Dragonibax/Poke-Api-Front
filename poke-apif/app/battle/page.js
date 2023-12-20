import Link from "next/link";

import commonStyles from '../user/common-styles.module.css';
export default function battle ( ) {
  return (
    <>
      <div className="battle-content">
        <h1 className="battletitles">Sección de combates</h1>
        <div className=".battletext">
        <p>
          Bienvenidos a nuestra Poke-Api
        </p>
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
