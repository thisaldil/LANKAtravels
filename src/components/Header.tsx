import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a
              href="/"
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
              
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                
                <path
                  d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM16 28C9.373 28 4 22.627 4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28Z"
                  fill="currentColor" />
                
                <path
                  d="M16 8C11.582 8 8 11.582 8 16C8 20.418 11.582 24 16 24C20.418 24 24 20.418 24 16C24 11.582 20.418 8 16 8ZM16 22C12.686 22 10 19.314 10 16C10 12.686 12.686 10 16 10C19.314 10 22 12.686 22 16C22 19.314 19.314 22 16 22Z"
                  fill="currentColor" />
                
                <path
                  d="M16 12C13.791 12 12 13.791 12 16C12 18.209 13.791 20 16 20C18.209 20 20 18.209 20 16C20 13.791 18.209 12 16 12ZM16 18C14.895 18 14 17.105 14 16C14 14.895 14.895 14 16 14C17.105 14 18 14.895 18 16C18 17.105 17.105 18 16 18Z"
                  fill="currentColor" />
                
              </svg>
              <span className="hidden md:block font-bold text-xl tracking-tight">
                LANKAtravels
              </span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center">
            <button className="flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer bg-white w-full max-w-[350px] md:max-w-[400px]">
              <div className="text-sm font-medium px-4 border-r border-gray-300 flex-1 text-left md:text-center truncate">
                Anywhere
              </div>
              <div className="hidden sm:block text-sm font-medium px-4 border-r border-gray-300 flex-1 text-center truncate">
                Any week
              </div>
              <div className="text-sm font-normal text-gray-500 px-4 flex-1 text-center truncate hidden md:block">
                Add guests
              </div>
              <div className="bg-teal-600 text-white p-2 rounded-full ml-2">
                <Search size={16} strokeWidth={3} />
              </div>
            </button>
          </div>

          {/* Right Nav */}
          <div className="flex-1 flex items-center justify-end gap-1">
            <a
              href="#"
              className="hidden md:block text-sm font-medium hover:bg-gray-100 rounded-full py-2 px-4 transition-colors">
              
              LANKAtravels your home
            </a>
            <button
              className="hidden md:flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Choose language and currency">
              
              <Globe size={18} />
            </button>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full p-2 md:py-1.5 md:px-3 hover:shadow-md transition-shadow ml-2 bg-white">
              <Menu size={18} className="text-gray-600" />
              <div className="bg-gray-500 text-white rounded-full p-1">
                <User size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>);

}