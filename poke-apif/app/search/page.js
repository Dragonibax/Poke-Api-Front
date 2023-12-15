import Tabla from "../components/Table"
import React from 'react';

const datos = [
  { campo1: 'Valor1', campo2: 'Valor2', campo3: 'Valor3', campo4: 'Valor4', campo5: 'Valor5', campo6: 'Valor6', campo7: 'Valor7' },
  // Agrega más filas según sea necesario
];

export default function search ( ) {
    return (
    <div>
        <h1>Seccion de estadisticas</h1>
        <p>Buscar Datos</p>  
        
        <div className="container">
        <table>
            <thead>
                <tr>
                    <th scope="col">dato1</th>
                    <th scope="col">dato2</th>
                    <th scope="col">dato3</th>
                    <th scope="col">dato4</th>
                    <th scope="col">dato5</th>
                    <th scope="col">dato6</th>
                    <th scope="col">dato7</th>
                </tr>
            </thead>
            <tbody>
                
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                        </tr>
                    

              
                
            </tbody>
            </table>
          </div>


     
    </div>
    )
  }