"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const isUserLoggedin = false; // Replace with actual authentication logic

  return (
    <nav className="h-16 w-full bg-black flex items-center justify-between px-4 md:px-8 relative">
      <Link href="/">
        <h3 className="h-10 w-10 bg-white rounded-full mx-5 my-3 cursor-pointer"></h3>
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        {isUserLoggedin ? (
          <div className="flex items-center space-x-4">
            <Link href="/">
              <h3 className="text-white bg-blue-600 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition-colors">
                Create Post
              </h3>
            </Link>
            <Link href="/">
              <h3 className="text-white cursor-pointer hover:underline">
                Sign Out
              </h3>
            </Link>
          </div>
        ) : (
          <Link href="/">
            <h3 className="text-white cursor-pointer hover:underline">
              Log In
            </h3>
          </Link>
        )}
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          className="text-white" 
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!(isMenuOpen))}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-16 right-4 bg-black text-white w-48 rounded-lg transition-transform transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} shadow-lg`}>
        <div className="flex flex-col items-center space-y-4 p-4">
          {isUserLoggedin ? (
            <>
              <Link href="/">
                <h3 className="block px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                  Create Post
                </h3>
              </Link>
              <Link href="/">
                <h3 className="block cursor-pointer hover:underline">
                  Sign Out
                </h3>
              </Link>
            </>
          ) : (
            <Link href="/">
              <h3 className="block px-4 py-2 text-center cursor-pointer hover:underline">
                Log In
              </h3>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
