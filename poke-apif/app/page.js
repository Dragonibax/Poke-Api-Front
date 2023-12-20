import {UserProvider} from "./components/Context/UserContextProvider";
import Link from "next/link";
import commonStyles from './user/common-styles.module.css';
export default function HomePage ( ) {
  return (
    <>
    <div className="home">
        <h1>Bienvenido a la aplicación web de combates Pokémon</h1>
        <br></br><br></br>
        <p>Aquí podrás realizar combates contra Pokémon aleatorios con la posibilidad de escoger entre una selección de 3 Pokémon diferentes para cada combate</p>
        <br></br><br></br>
        <p>También podrás consultar tu historial con las estadísticas de todos tus combates hasta ahora.</p>
        <br></br><br></br>
        <p>Para acceder a estas funciones solo tienes que iniciar sesion.</p>
        <Link className="btn10" href="/user/login">Iniciar Sesión</Link>
      </div>    

    </>
  )
}
