import React from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-sky-400" />
            <span className="ml-2 text-xl font-bold">Aeroperu Virtual</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#inicio" className="hover:text-sky-400 px-3 py-2">Inicio</a>
              <a href="#destinos" className="hover:text-sky-400 px-3 py-2">Destinos</a>
              <a href="#flota" className="hover:text-sky-400 px-3 py-2">Flota</a>
              <a href="#unete" className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md">Únete</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block hover:text-sky-400 px-3 py-2">Inicio</a>
            <a href="#destinos" className="block hover:text-sky-400 px-3 py-2">Destinos</a>
            <a href="#flota" className="block hover:text-sky-400 px-3 py-2">Flota</a>
            <a href="#unete" className="block bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md mt-4">Únete</a>
          </div>
        </div>
      )}
    </nav>
  );
}