'use client'
import Link from "next/link"
//import styles from './navegation.module.css'

import { root } from "postcss"
import {useContext} from "react";
import {useUserContext} from "@/app/components/Context/UserContextProvider";

const linksNoUser =[{
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
  route : '/usuario'
}]
const linksUser =[{
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
  route : '/usuario'
},{
    label : 'Cerrar sesion',
    route : '/'
}]

export function Navigation ( ) {
  const {user} = useUserContext();
  return(
  <header>
    <nav className="nav">
      <ul className="navul">
        {
          user.logged
              ?
              linksUser.map(({label, route}) => (
                  <li key={route}>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
              ))
              :
              linksNoUser.map(({label, route}) => (
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