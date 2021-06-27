import { useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Hamburger from 'hamburger-react';

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="bg-primaryyellow text-black sticky top-0 w-full flex flex-wrap items-center justify-between px-2 z-50">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              
              <a className="flex items-center align-center text-sm font-bold mr-4 py-2 uppercase " href="/">
                <Image
                    src="/images/chaddy-logo.svg"
                    alt="Chadderton Park Sports Club"
                    width={100}
                    height={100}
                />
                <h2 className="text-1xl md:text-xl">Chadderton Park Sports Club</h2>
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Hamburger />
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center justify-center m-auto h-auto" +
                (navbarOpen ? " flex " : " hidden")
              }
             
            >
              <ul className="flex flex-col align-center justify-center lg:flex-row list-none lg:ml-auto h-5/6 md:h-auto py-12">
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/">
                        Home
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/about">
                        About us
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/teams">
                        Teams
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/information">
                        Information
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/news">
                        News
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/contact">
                        Contact us
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }