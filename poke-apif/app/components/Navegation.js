import Link from "next/link"
//import styles from './navegation.module.css'

import { root } from "postcss"

const links =[{
  label : 'Inicio',
  route : '/'
},{
  label : 'Busqueda',
  route : '/search'
},{
  label : 'Combates',
  route : '/battle'
},{
  label : 'Cuenta',
  route : '/login'
}]

export function Navigation ( ) {
  return(
  <header>
    <nav className="nav">
      <ul className="navul">
          {links.map(({label,route}) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
            ))}
      </ul>
    </nav>
  </header>          
  )
}