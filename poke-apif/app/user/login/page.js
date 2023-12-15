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
            <h1>Iniciar sesion</h1>:
            <h1>Bienvenido {user.nombre}</h1>}           
            {user.logged?
                <button onClick={()=>logoutUser()}>Salir</button>
                :
                <><input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password} onChange={e=>setPassword(e.target.value)}/>
                <button onClick={()=>loginUser(email,password)}>Iniciar sesion</button>
                </>
                
            }
        </>
    )
  }