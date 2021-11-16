import Link from 'next/link'
import Image from 'next/image'

import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer>
      <div className="bg-primaryyellow text-black grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-12">
        <div className="py-12 flex flex-col items-center justify-center px-2">
          <div className="mb-5">
            <Image
              src="/images/chaddy-logo.svg"
              alt="Chadderton Park Sports Club"
              width={75}
              height={75}
            />
          </div>
          <div className="px-5">
            <h3 className="text-2xl font-bold text-center mb-5">
              © {new Date().getFullYear()} chaddertonparkfc.co.uk
            </h3>
            <p className="pb-5 text-center">CHADDY FOLD, Kiln Hill Ln, Chadderton, Oldham OL1 2RR</p>
            <h4 className="text-center">
              Affiliation No..W-Man2950 | Club ID 66741
            </h4>
          </div>
        </div>
        <ul className="flex flex-col align-center justify-center list-none mx-auto py-12">
          <h2 className="mx-auto">Links</h2>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out " onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/">
                        Home
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out active:bg-black" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                    <Link href="/about">
                        About us
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                    <Link href="/teams">
                        Teams
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/information">
                        Information
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/news">
                        News
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/photos">
                        Photos
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/videos">
                        Videos
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/contact">
                        Contact us
                    </Link>
                  </a>
                </li>
              </ul>


              <div className="py-12 flex items-center justify-center px-2">
                <a href="https://www.facebook.com/chadderton.park/" target="_blank" className="px-4">
                  <FaFacebookSquare size="3rem" className="mx-auto" />
                </a>
                <a href="https://twitter.com/chaddypark?lang=en" target="_blank" className="px-4">
                  <FaTwitterSquare size="3rem" className="mx-auto" />
                </a>
                <a href="https://www.instagram.com/chaddertonpark/?hl=en" target="_blank" className="px-4">
                  <FaInstagramSquare size="3rem" className="mx-auto" />
                </a>
          </div>
              </div>     
    </footer>
  )
}
