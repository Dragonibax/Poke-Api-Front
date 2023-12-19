'use client'
import {useUserContext} from "../../components/Context/UserContextProvider";
//import {useState} from "react";
//nuevos imports
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import commonStyles from '../common-styles.module.css';
import ProgressBar from '../../components/ProgressBar';


const login = () => {
    // Estados locales para el nombre de usuario y la contraseña
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [progressBarStarted, setProgressBarStarted] = useState(false);
    const [existError, setExistError] = useState(false);

    // Se obtiene el objeto router para redirigir después del inicio de sesión
    //const router = useRouter();
  
    // Función para manejar el inicio de sesión
    const handleLogin = async () => {
      try {
        setProgressBarStarted(true);
        // Realiza la petición a la API para iniciar sesión
        const response = await fetch('http://localhost:8080/api/user/encoded', {
          method: 'POST',  
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
          
        // Si la petición es exitosa, redirige a la página principal
        if (response.ok) {
          setProgressBarStarted(false);
          loginUser(username);
            //router.push('/');
            
        } else {
          // Manejamos casos de error aquí, mostramos mensaje de error, etc.
          console.error('Error en la petición:', response.status, response.statusText);
          setProgressBarStarted(false);
          setExistError(true);
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Muestra un mensaje de error al usuario
      }
    };

    const {user,loginUser,logoutUser} = useUserContext();

    //const [password, setPassword] = useState('');
    return (
        <>
        <div className={`${commonStyles.backgroundContainer1} ${commonStyles.pageContainer1}`}>
            {!user.logged?
            <h1></h1>:
            <h1 className="title" >Bienvenido {user.user}</h1>}           
            {user.logged?
                <>
                <div className="centrardiv">
                <button className='btn10' onClick={()=>logoutUser()}>Salir</button>
                </div>
                </>
                :
                <>    
                
                <div className={commonStyles.container1}>
                    <h2 className={commonStyles.customHeader1}>Inicio de Sesion</h2>
                    {/* Cajas de entrada para el nombre de usuario y la contraseña */}
                    <input
                      type="text"
                      placeholder="Usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={commonStyles.inputField1}
                    />

                    <input
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={commonStyles.inputField1}
                    />
                    {/* Botón para realizar el inicio de sesión */}
                    <button className={commonStyles.customButton1} onClick={handleLogin}>
                        Iniciar Sesion                
                    </button>
                    <ProgressBar startProgressBar={progressBarStarted} />
                    {existError && <p style={{ color: 'red' }}>Usuario o contraseña incorrectos</p>}
                    {/* Enlace para recuperar contraseña */}
                    <p className={commonStyles.forget}>
                      ¿Olvidaste la contraseña?{' '}
                      <Link href="/user/findpassword">Recupérala</Link>
                    </p>
            
                    {/* Enlace para redirigir al usuario a la página de registro */}
                    <p className={commonStyles.forget}>
                      ¿No tienes una cuenta?{' '}
                      <Link href="/user/newuser">Regístrate</Link>
                    </p>
                  </div>
                  
                
                </>
                
            }
            </div>
        </>
    )
  };

  export default login;