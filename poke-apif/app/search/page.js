'use client'
import Tabla from "../components/Table"
import React, {useState, useEffect} from 'react';
import axios from "axios";


const datos = [
  { campo1: 'Valor1', campo2: 'Valor2', campo3: 'Valor3', campo4: 'Valor4', campo5: 'Valor5', campo6: 'Valor6', campo7: 'Valor7' },
  // Agrega más filas según sea necesario
];

const url ='http://localhost:8080/api/historial/findall';


export default function search ( ) {
    

    const [data, setData] = useState([]);

    let url ='http://localhost:8080/api/historial/findall'; //poner aqui url de la api a usar
 fetch(url)
     .then(response=> response.json())
     .then(data=> mostrarData(data))
     .catch(error=> console.log(error))

 const mostrarData = (data) => {
     console.log(data)
     let body = ''
     for (let i = 0; i<data.length; i++){
         body += `<tr><td>${data[i].idUser}</td><td>${data[i].nameUser}</td><td>${data[i].timeBet}</td><td>${data[i].isWinnerUser}</td><td>${data[i].idUserPokemon}</td><td>${data[i].nameUserPokemon}</td><td>${data[i].tipeUserPokemon}</td><td>${data[i].moveUserPokemon}</td><td>${data[i].hpUserPokemon}</td><td>${data[i].isOpntWinner}</td><td>${data[i].nameOpntPokemon}</td><td>${data[i].typeOpnt}</td><td>${data[i].moveOpntPokemon}</td><td>${data[i].hpOpntPokemon}</td><td>${data[i].numberTurns}</td></tr>`
     }
    

     document.getElementById('data').innerHTML = body
    }

    
    return (
    <div>
        <h1 className="titlees">Seccion de estadisticas</h1>
        

        <h2 className="tabletitle">Tabla de estadisticas de las Batallas Pokemon</h2>

    <div className="container"> 
        <table>
         <thead>
            <tr>
                <th>ID</th>
                <th>USUARIO</th>
                <th>APUESTA DE TIEMPO</th>
                <th>GANADOR</th>
                <th>IDPOKEMON</th>
                <th>POKEMON</th>
                <th>TIPO</th>
                <th>MOVIMIENTOS</th>
                <th>HP</th>
                <th>OPONENTE GANADOR</th>
                <th>POKEMON OPONENTE</th>
                <th>TIPO</th>
                <th>MOVIMIENTO</th>
                <th>HP</th>
                <th>TURNOS</th>
            </tr>
         </thead>
         <tbody id="data">
            
         </tbody>
        </table>
        </div>   

{/* <script>
 let url ='http://localhost:8081/autores';
 fetch(url)
     .then(response=> response.json())
     .then(data=> mostrarData(data))
     .catch(error=> console.log(error))

 const mostrarData = (data) => {
     console.log(data)
     let body = ''
     for (let i = 0; i<data.length; i++){
         body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].dato2}</td><td>${data[i].dato3}</td><td>${data[i].dato4}</td><td>${data[i].dato5}</td><td>${data[i].dato6}</td></tr>`
     }

     document.getElementById('data').innerHTML = body
 }
</script> */}
        
    </div>

    
    
       
    )
  }