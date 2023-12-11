import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { AuthContextProvider } from '../../stores/authContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp
