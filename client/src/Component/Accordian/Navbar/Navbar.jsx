import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-[#1f8a94] to-[#0a2f4d] p-3">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-10 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6"
              >
                {mobileMenu ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <p className="text-white text-4xl font-bold font-sans font-stretch-ultra-expanded">
              TINYURL
            </p>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="font-sans hover:underline px-3 py-2 text-xl text-white hover:text-white"
                >
                  Plans
                </a>
                <a
                  href="#"
                  className="font-sans px-3 hover:underline py-2 text-xl text-white hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="font-sans px-3 py-2 text-xl hover:underline text-white hover:text-white"
                >
                  Domains
                </a>
                <a
                  href="#"
                  className="font-sans px-3 py-2 text-xl text-white hover:underline hover:text-white"
                >
                  Resources
                </a>
              </div>
            </div>
          </div>

          <div className="relative ml-3">
            <button className="p-5 cursor-pointer hover:underline text-white text-xl">
              Log In
            </button>
            <button className="bg-blue-400 pb-9 hover:bg-blue-500 rounded-md h-10 w-25 text-xl text-white font-sans p-2 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
