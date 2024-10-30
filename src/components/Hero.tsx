import React from 'react';

export default function Hero() {
  return (
    <div id="inicio" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Bienvenido a Aeroperu Virtual</h1>
          <p className="text-xl md:text-2xl mb-8">Explora los cielos virtuales de Sudamérica con la aerolínea líder del Perú</p>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Comienza a Volar
          </button>
        </div>
      </div>
    </div>
  );
}