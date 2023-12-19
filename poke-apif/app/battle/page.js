import Link from "next/link";
import commonStyles from '../user/common-styles.module.css';
export default function battle ( ) {
  return (
    <>

  <div className={`${commonStyles.backgroundContainercombat} ${commonStyles.pageContainercombat}`}>
    <h1 className="battletitles">Seccion de combates</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna lectus, pellentesque quis cursus accumsan, posuere in erat. Vestibulum vel pellentesque sapien, vitae feugiat ex. Mauris eget suscipit orci, et porttitor sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec accumsan felis, quis egestas ex. Vestibulum rutrum dolor ante, ut sodales metus efficitur eu. Fusce convallis tortor in augue lacinia, sed placerat mauris ullamcorper. Duis rhoncus ut enim sit amet blandit.</p>
      <Link className="btn10" href={"/battle/starbattle"}>
                    Iniciar Batalla
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
     
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