import { Menu, Transition } from '@headlessui/react'
import {Squash as Hamburger } from 'hamburger-react'
import { Fragment, useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'


export default function Example() {
  return (
    <div className="bg-primaryyellow text-black sticky top-0 w-full flex flex-wrap items-center justify-between px-2 z-50">
      <Menu as="div" className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <a className="flex items-center align-center text-sm font-bold mr-4 py-2 uppercase" href="/">
          <Image
              src="/images/chaddy-logo.svg"
              alt="Chadderton Park Sports Club"
              width={75}
              height={75}
          />
          Chadderton Park<br />Sports Club
          </a>
          <div>
          <Menu.Button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Hamburger />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-100"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-100"
        >
          <Menu.Items className="absolute top-24 right-0 w-full origin-top-right bg-yellow-400 py-12 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                  <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/">
                        Home
                    </Link>
                  </a>
              </Menu.Item>
              <Menu.Item>
              <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/about">
                        About us
                    </Link>
                  </a>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
              <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/teams">
                        Teams
                    </Link>
                  </a>
              </Menu.Item>
              <Menu.Item>
              <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/information">
                        Information
                    </Link>
                  </a>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
              <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/news">
                        News
                    </Link>
                  </a>
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
              <a className="px-3 py-2 flex items-center justify-center text-1xl md:text-xs uppercase font-bold leading-snug hover:opacity-75">
                    <Link href="/contact">
                        Contact us
                    </Link>
                  </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

