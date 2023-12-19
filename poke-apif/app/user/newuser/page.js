'use client'
import {useUserContext} from "../../components/Context/UserContextProvider";
import {useState} from "react";
import Link from "next/link"



// Importa React y los estilos de CSS Modules
import commonStyles from '../common-styles.module.css';

// Define el componente de registro
const newuser = () => {
  // Estados para almacenar los datos del formulario
  const [username, setusername] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  // Función para manejar el registro
  const handleRegistro = async () => {
    try {
      // Verifica que todos los campos estén completos
      if (!username || !name || !email || !password) {
        console.error('Por favor, complete todos los campos');
        return;
      }

      // Envía la solicitud de registro usando fetch
      const response = await fetch('http://localhost:8080/api/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          name,
          email,
          password,
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
    <div className={`${commonStyles.backgroundContainer2} ${commonStyles.pageContainer2}`}>

      <div className={commonStyles.container2}>

        <h2 className={commonStyles.customHeader2}>Crear cuenta</h2>
        
        {/* Formulario con estilos del módulo CSS */}
        <form>
          {/* Cajas de entrada para el registro con estilos del módulo CSS */}
          <div>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className={commonStyles.inputField2}
            />
          </div>
          <div >
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className={commonStyles.inputField2}
            />
          </div>
          <div >
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className={commonStyles.inputField2}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className={commonStyles.inputField2}
            />
          </div>
          {/* Caja de entrada para el botón de registro con estilos del módulo CSS */}
          <button
            type="button"
            className={`${commonStyles.customButton2} ${commonStyles.register2}`}
            onClick={handleRegistro}
          >
            Registrarse
          </button>
          {/* Mensaje de "¿Ya tienes una cuenta?" con estilos del módulo CSS */}
          <p className={commonStyles.forget2}>
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
