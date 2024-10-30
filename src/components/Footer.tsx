import React from 'react';
import { Plane, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Plane className="h-8 w-8 text-sky-400" />
              <span className="ml-2 text-xl font-bold">Aeroperu Virtual</span>
            </div>
            <p className="text-gray-400">
              La mejor experiencia de aviación virtual en Sudamérica
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#destinos" className="text-gray-400 hover:text-white">Destinos</a></li>
              <li><a href="#flota" className="text-gray-400 hover:text-white">Flota</a></li>
              <li><a href="#unete" className="text-gray-400 hover:text-white">Únete</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@aeroperuvirtual.com</li>
              <li>Discord: AeroPeruVA</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aeroperu Virtual. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}