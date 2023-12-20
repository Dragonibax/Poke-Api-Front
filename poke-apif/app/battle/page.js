import Link from "next/link";
import commonStyles from '../user/common-styles.module.css';
export default function battle ( ) {
  return (
    <>

  <div className={`${commonStyles.backgroundContainercombat} ${commonStyles.pageContainercombat}`}>
    <h1 className={`${commonStyles.battletitles}`}>Sección de combates</h1>
    <p className={`${commonStyles.battletitles2}`}>En la sección de combates de un juego de Pokémon, el jugador tiene la oportunidad de enfrentarse a otros Pokémon en emocionantes duelos. Al inicio del combate, se presenta una pantalla donde puedes elegir de tu equipo el Pokémon con el que deseas luchar. Cada Pokémon tiene sus propias habilidades y estadísticas, incluyendo tipos de movimientos como ataque, defensa, y habilidades especiales.</p>
      <Link className="btn10" href={"/battle/starbattle"}>
                    Iniciar Batalla
      </Link>
      
     
  </div>
  </>
  )
}



/* idea del formato json a enviar
        {
          "idUsuario": 2342,
           id:35,
           name:"clefairy",
          "type": "grass",
          "move": "cut",
          "hp": 100
      }

*/