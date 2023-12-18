'use client'
import {useUserContext} from "../../components/Context/UserContextProvider";
import {useState} from "react";
import Link from "next/link"



// Importa React y los estilos de CSS Modules
import commonStyles from '../common-styles.module.css';

// Define el componente de registro
const newuser = () => {
  // Estados para almacenar los datos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Función para manejar el registro
  const handleRegistro = async () => {
    try {
      // Verifica que todos los campos estén completos
      if (!nombre || !apellido || !correoElectronico || !contrasena) {
        console.error('Por favor, complete todos los campos');
        return;
      }

      // Envía la solicitud de registro usando fetch
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correoElectronico,
          contrasena,
        }),
      });

      // Verifica el estado de la respuesta
      if (response.ok) {
        console.log('Registro exitoso');
      } else {
        console.error('Error en el registro:', response.statusText);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    // Contenedor principal con estilos del módulo CSS
    <div className={`${commonStyles.backgroundContainer} ${commonStyles.pageContainer}`}>
      <div className={commonStyles.container}>
        <h2 className={commonStyles.customHeader}>Registro</h2>
        {/* Formulario con estilos del módulo CSS */}
        <form>
          {/* Cajas de entrada para el registro con estilos del módulo CSS */}
          <div className={commonStyles.inputField}>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className={commonStyles.inputField}>
            <input
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className={commonStyles.inputField}>
            <input
              type="text"
              placeholder="Correo Electrónico"
              value={correoElectronico}
              onChange={(e) => setCorreoElectronico(e.target.value)}
            />
          </div>
          <div className={commonStyles.inputField}>
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          {/* Caja de entrada para el botón de registro con estilos del módulo CSS */}
          <button
            type="button"
            className={`${commonStyles.customButton} ${commonStyles.register}`}
            onClick={handleRegistro}
          >
            Registrarse
          </button>
          {/* Mensaje de "¿Ya tienes una cuenta?" con estilos del módulo CSS */}
          <p className={commonStyles.forget}>
            ¿Ya tienes una cuenta?{' '}
            {/* Utiliza Link para redirigir al usuario a la página de login */}
            <Link href="/user/login">Iniciar Sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

// Exporta el componente de registro
export default newuser;
