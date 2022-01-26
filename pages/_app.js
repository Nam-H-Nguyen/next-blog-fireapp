import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

// Wrapper of all pages
// Can add global components that persists here (navbar, footer, auth)
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp
