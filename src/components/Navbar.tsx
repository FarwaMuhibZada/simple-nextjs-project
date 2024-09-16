'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Tech Insights</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-20">
        <Link href="/about" className="text-white block">About</Link>
        <Link href="/contact" className="text-white block">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-gray-800 p-4">
          <Link href="/about" className="text-white block">About</Link>
          <Link href="/contact" className="text-white block">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
