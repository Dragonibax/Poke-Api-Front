'use client'
import {useUserContext} from "../components/Context/UserContextProvider";
import {useState} from "react";
import Link from "next/link"
import commonStyles from './common-styles.module.css';
export default function cuenta( ) {

    const {user,loginUser,logoutUser} = useUserContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    return (
        
        <> <div className={`${commonStyles.backgroundContainer5} ${commonStyles.pageContainer5}`}>

        <div className={commonStyles.container5}> <h2 className={commonStyles.customHeader5}>Bienvenido a PokeApiBattle</h2>
        <form>
        <p className={commonStyles.customHeader5n}>
        Necesitas una cuenta para iniciar
        </p>
        
        <button className={commonStyles.forget5}>
            <Link href="/user/login">Iniciar Sesión</Link>
          </button>
          <button className={commonStyles.forget5}>
            <Link href={"/user/newuser"}>
                    Crear cuenta</Link>
          </button>
          <button className={commonStyles.forget5}>
            <Link href={"/user/findpassword"}>
                    Recuperar contraseña</Link>
          </button>
            </form></div>

            {!user.logged?
            <>
            {/* <h1>Bienvenido a PokeApiBattle</h1>
            <h2>Necesitas una cuenta para iniciar</h2> */}
            </>
            :
            <h1>Bienvenido de vuelta {user.nombre}</h1>}
           
            

            {user.logged?
                <button>Salir</button>
                :
                <>
                 {/* <Link className="linkbotton" href={"/user/login"}>
                    Iniciar sesion
                </Link>
                <Link className="linkbotton" href={"/user/newuser"}>
                    Crear cuenta
                </Link> */}
                {/* <Link className="linkbotton" href={"/user/findpassword"}>
                    Recuperar contraseña
                </Link> */}
                </>
            }
            </div>
        </>
    )
  }