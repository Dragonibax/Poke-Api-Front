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
        

      <div className="tabla">
        <h1>Mi Página con Tabla</h1>
        <Tabla datos={datos} />
      </div>


     
    </div>
    )
  }