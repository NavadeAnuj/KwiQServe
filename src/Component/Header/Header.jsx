import React, { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-primary text-white shadow-md relative transition duration-300">
        <h1 className="text-xl font-bold">My Website</h1>

        {/* Toggle button for mobile */}
        <button
          className="md:hidden p-2 text-white focus:outline-none z-20"
          onClick={toggleNav}
          aria-label="Toggle Navigation"
        >
          {navOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Navigation links */}
        <nav
          className={`fixed top-0 right-0 h-full w-3/4 bg-primary transform ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } md:relative md:translate-x-0 md:flex md:items-center md:justify-end transition-transform duration-300 ease-in-out z-10`}
        >
          <ul className="flex flex-col p-4 md:p-0 space-y-4 md:space-y-0 md:flex-row md:space-x-4 lg:space-x-6">
            <li>
              <a
                href="/"
                className="block p-2 lg:p-3 hover:bg-secondary hover:text-white transition duration-300 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 lg:p-3 hover:bg-secondary hover:text-white transition duration-300 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 lg:p-3 hover:bg-secondary hover:text-white transition duration-300 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Overlay for mobile menu */}
        {navOpen && (
          <div
            className="fixed inset-0 z-0 bg-black opacity-50 md:hidden"
            onClick={toggleNav}
          ></div>
        )}
      </header>
    </div>
  );
};

export default Header;
