import React from "react";
import { Disclosure } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navigation = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
];

export default function NormalNavbar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-transparent filter backdrop-blur-lg z-50"
    >
      {({ open }) => (
        <>
          <div className="w-screen mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative w-full flex items-center justify-center h-16">
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiOutlineMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center ">
                <div className="flex-shrink-0 flex items-center ">
                  <a
                    href="/"
                    className="flex items-center justify-center text-white text-lg h-8 w-auto text-center
                     px-4 py-2 transition-all duration-300 rounded transform hover:-translate-y-0.5 hover:text-white
                     font-semibold tracking-wider"
                  >
                    ranj.dev
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        href={item.href}
                        className="text-slate-100 transform hover:-translate-y-0.5 hover:text-white block px-4 py-2 text-lg transition-all duration-500"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button
                  onClick={() => {}}
                  className="border border-orange-700 text-orange-700 py-1 px-4 text-center text-lg font-semibold tracking-wider rounded
                  transition-all duration-300
                   hover:border-slate-900 hover:text-slate-900 hover:bg-orange-700
                  active:bg-orange-900
                  "
                >
                  CV
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="bg-gray-900 text-white text-sm px-4 py-2text-gray-300 hover:bg-gray-700 hover:text-white block py-2 transition-all duration-300 rounded "

                  // aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
