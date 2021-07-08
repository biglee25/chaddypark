import '../styles/globals.css'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="mt-20 pt-2"></div>
        <Component {...pageProps} />
    </>
  )
}


