export default function battle ( ) {
  return (
  <div>
    <h1>Seccion de combates</h1>

    
    <div class="formpo">
    <label for="nomb" class="text-danger">Nombre Pokemon</label>
    <input required type="text" class="placeh" name="pokemon" placeholder="Pikachu" value=""></input>
   </div>

   <div class="formpo">
    <label for="tip" class="text-danger">Tipo Pokemon</label>
    <input required type="text" class="placeh" name="tipo" placeholder="Electrico" value=""></input>
   </div>

   <div class="formpo">
    <label for="cla" class="text-danger">Ataque Pokemon</label>
    <input required type="text" class="placeh" name="ataque" placeholder="Impactrueno" value=""></input>
   </div>

   <br></br>

   
    <a class="boton" href="/battle.html">batalla!</a>
  </div>
  
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