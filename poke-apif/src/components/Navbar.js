import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href='/'>
       | Logo |
      </Link>
      <Link href='/users'>
        | Iniciar sesion |
      </Link>
      <Link href='/posts'>
       | Info |
      </Link>
    </nav>
  )
}