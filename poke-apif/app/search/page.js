'use client'
import Tabla from "../components/Table"
import React, {useState, useEffect} from 'react';
import axios from "axios";


const datos = [
  { campo1: 'Valor1', campo2: 'Valor2', campo3: 'Valor3', campo4: 'Valor4', campo5: 'Valor5', campo6: 'Valor6', campo7: 'Valor7' },
  // Agrega más filas según sea necesario
];



const url ='http://localhost:8080/api/user/findall';


export default function search ( ) {
    

    const [data, setData] = useState([]);

    let url ='http://localhost:8080/api/user/findall'; //poner aqui url de la api a usar
 fetch(url)
     .then(response=> response.json())
     .then(data=> mostrarData(data))
     .catch(error=> console.log(error))

 const mostrarData = (data) => {
     console.log(data)
     let body = ''
     for (let i = 0; i<data.length; i++){
         body += `<tr><td>${data[i].idUser}</td><td>${data[i].name}</td><td>${data[i].timeBet}</td><td>${data[i].winner}</td><td>${data[i].battles}</td><td>${data[i].victories}</td><td>${data[i].defeats}</td></tr>`
     }
    

     document.getElementById('data').innerHTML = body
    }

    
    return (
    <div>
        <h1>Seccion de estadisticas</h1>
        <p>Buscar Datos</p>  

        <h2>Tabla de estadisticas de las Batallas Pokemon</h2>
        
        <table>
         <thead>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APUESTA DE TIEMPO</th>
                <th>GANADOR</th>
                <th>BATALLAS</th>
                <th>VICTORIAS</th>
                <th>DERROTAS</th>
            </tr>
         </thead>
         <tbody id="data">
            
         </tbody>
        </table>

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