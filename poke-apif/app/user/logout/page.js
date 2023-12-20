'use client'
import {useUserContext} from "../../components/Context/UserContextProvider";
import {useState} from "react";
import Link from "next/link"



export default function login ( ) {
    const {user,loginUser,logoutUser} = useUserContext();

    return (
        <>

            <div className="centrardiv" >
            <h2 className="historialTitle">¿Seguro que deseas salir?</h2>

            <Link className="btn10" onClick={()=>logoutUser()} href={"/"}>
                    Salir
            </Link>
            </div>
               

            
        </>
    )
  }