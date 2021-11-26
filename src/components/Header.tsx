import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import Transition from "../utils/Transition.js";

function Header() {
  const [top, setTop] = useState(true);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const { isAuthenticated, user, logout } = useMoralis();

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" passHref aria-label="Cruip">
              <a className="block">
                <img
                  src="/Regalis2.png"
                  alt="Regalis"
                  width="100"
                  height="100"
                  className="w-16 sm:w-20 sm:h-w-20 l"
                />
              </a>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link href="/dashboard">
                  <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 mr-3 flex items-center transition duration-150 ease-in-out">
                    Dashboard
                  </a>
                </Link>
              </li> */}

              <li>
                <Link href="/contactPage">
                  <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 mr-3 flex items-center transition duration-150 ease-in-out">
                    Contact us
                  </a>
                </Link>
              </li>
              {!isAuthenticated ? (
                <li>
                  <Link href="/login">
                    <a className="btn-sm text-gray-800 bg-gray-300 hover:bg-purple-700 hover:text-gray-300 ml-3">
                      Sign in
                      <svg
                        className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
              ) : (
                <div className="flex items-center justify-center">
                  <div className="relative inline-block">
                    <button
                      onClick={() => setProfileDropDown(!profileDropDown)}
                      className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
                    >
                      <svg
                        className="w-5 h-5 text-gray-800 dark:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <Transition
                      show={profileDropDown}
                      appear={true}
                      className="w-full"
                      enter="transition ease-in-out duration-300 transform order-first"
                      enterStart="opacity-0 translate-y-1"
                      enterEnd="opacity-100 translate-y-0"
                      leave="transition ease-in-out duration-300 transform absolute"
                      leaveStart="opacity-100 translate-y-0"
                      leaveEnd="opacity-0 -translate-y-1"
                    >
                      <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
                        <a
                          href="/profile"
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Your profile
                        </a>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Sign Out
                        </button>
                      </div>
                    </Transition>
                  </div>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
