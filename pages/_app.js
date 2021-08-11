import '../styles/globals.css'

import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className="bg-gray-100">
    <Navbar />
      <div className="mt-20 pt-2"></div>
        <Component {...pageProps} />
    </div>
    </>
  )
}


