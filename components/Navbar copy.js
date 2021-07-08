import { useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Hamburger from 'hamburger-react';

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
      <>
        <nav className="sticky w-full flex flex-wrap items-center justify-between px-2 bg-gray-700 z-50">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
                <Image
                    src="/images/logo.webp"
                    alt="Invaded by Pixels"
                    width={100}
                    height={100}
                />

              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Hamburger />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center justify-center m-auto h-auto transition duration-500" +
                (navbarOpen ? " flex " : " hidden")
              }
             
            >
              <ul className="flex flex-col align-center justify-center lg:flex-row list-none lg:ml-auto h-5/6 md:h-auto py-12">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link href="/">
                        Home
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link href="/coffee">
                        Our Coffee
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link href="/contact">
                        Contact us
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }