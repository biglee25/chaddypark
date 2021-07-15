import { useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Navbar({ fixed }) {

    const [expanded, setExpanded] = useState(false)

    return (
      <>
        <nav expanded={expanded} className="fixed top-0 w-full h-auto flex flex-wrap items-center justify-between px-2 bg-primaryyellow z-50 shadow-md">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a className="flex items-center align-center text-sm font-bold mr-4 py-2 uppercase" href="/">
              <Image
                src="/images/chaddy-logo.svg"
                alt="Chadderton Park Sports Club"
                width={75}
                height={75}
              />
              Chadderton Park<br />Sports Club
              </a>
              <button className="text-black cursor-pointer px-3 py-1 flex items-center lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" type="button">
               <FontAwesomeIcon icon={faBars} size="2x" onClick={() => setExpanded(!expanded)} />
              </button>
              </div>
            <div
              className={"lg:flex flex-grow items-center justify-center m-auto h-auto transition duration-500" + (expanded ? " flex  " : " hidden")}>
              <ul className="flex flex-col align-center justify-center lg:flex-row list-none lg:ml-auto h-5/6 md:h-auto py-12">
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/">
                        Home
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                    <Link href="/about">
                        About us
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                    <Link href="/teams">
                        Teams
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/information">
                        Information
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                  <Link href="/news">
                        News
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="px-3 py-2 flex items-center justify-center text-2xl md:text-xs uppercase font-bold leading-snug text-black hover:bg-black hover:text-white hover:transition hover:duration-500 hover:ease-in-out" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
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


  