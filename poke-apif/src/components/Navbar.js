import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../../stores/authContext'

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)

  return (
    <div className="container">
      <nav>
        <Image src="/ball.jpg" alt="Preview" class="imagen" width={50} height={48} />
        
        <h1>Poke Appi</h1>
        {!authReady && (
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/guides">Combates</Link></li>
            {!user && <li onClick={login} className="btn">Iniciar/Crear usuario</li>}
            {user && <li>{user.email}</li>}
            {user && <li onClick={logout} className="btn">Cerrar sesion</li>}
          </ul>
        )}
      </nav>     
    </div>
  )
}