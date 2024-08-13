"use client";
import Link from "next/link";
import React from "react";
import "@/styles/globals.css";
export const Nav = () => {
  const isUserLoggedin = true; // Replace with actual authentication logic

  return (
    <nav className="h-16 w-full bg-black flex items-center justify-between px-4 md:px-8">
      <Link href="/">
        <h3 className="h-10 w-10 bg-white rounded-full cursor-pointer"></h3>
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
                Profile
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
      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
        {isUserLoggedin ? (
          <>
            <Link href="/">
              <h3 className="text-white bg-blue-600 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition-colors">
                Create Post
              </h3>
            </Link>
            <Link href="/">
              <h3 className="text-white cursor-pointer hover:underline">
                Profile
              </h3>
            </Link>
            <Link href="/">
              <h3 className="text-white cursor-pointer hover:underline">
                Sign Out
              </h3>
            </Link>
          </>
        ) : (
          <Link href="/">
            <h3 className="text-white cursor-pointer hover:underline">
              Log In
            </h3>
          </Link>
        )}
      </div>
    </nav>
  );
};
