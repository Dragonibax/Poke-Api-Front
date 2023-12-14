'use client'
import {useUserContext} from "@/app/components/Context/UserContextProvider";
import {useState} from "react";


export default function login ( ) {

    const {user,loginUser,logoutUser} = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            {!user.logged?
            <>
            <h1>Bienvenido a PokeApiBattle</h1>
            <h2>Necesitas una cuenta para iniciar</h2>
            </>
            :
            <h1>Bienvenido de vuelta {user.nombre}</h1>}
            

            {user.logged?
                <button>Salir</button>
                :
                <>
                <button>Iniciar sesion</button>
                <button>Crear cuenta</button>
                <button>Recuperar contraseña</button>
                </>
            }
        </>
    )
  }