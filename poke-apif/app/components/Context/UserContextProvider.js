'use client'
import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext(undefined);
export const UserProvider = ({children}) => {
    const usuarioMaqueta = {
        nombre: '',
        apellido: '',
        edad: 0,
        email: '',
        logged: false
    }
    const [user, setUser] = useState(usuarioMaqueta);
    //Se manda a llamar la API de usuarios para el inicio de sesion
    const loginUser = async (email,password) => {
        //Modificar el cuerpo ¡¡¡Pendiente!!!
        const response = await fetch('http://localhost:3000/api/user');
        //const data = await response.json();
        const data = {
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 25,
            email: '',
            logged: true
        };
        setUser(data);
    }
    const logoutUser = () => {
        setUser(usuarioMaqueta);
    }
    return (
        <UserContext.Provider value={{user,loginUser,logoutUser}}>
            {children}
        </UserContext.Provider>
    )
};
export const useUserContext = () => {
    return useContext(UserContext);
};
