import React, { useState } from 'react';

const destinationsByCountry = {
  Perú: [
    {
      city: 'Cusco',
      image:
        'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Explora la antigua capital del Imperio Inca',
      airports: 'Aeropuerto Internacional Alejandro Velasco Astete (CUZ)',
    },
    {
      city: 'Lima',
      image:
        'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Descubre la ciudad de los reyes',
      airports: 'Aeropuerto Internacional Jorge Chávez (LIM)',
    },
    {
      city: 'Arequipa',
      image:
        'https://media.traveler.es/photos/61376ddacb06ad0f20e12713/master/pass/143246.jpg',
      description: 'Visita la ciudad blanca',
      airports: 'Aeropuerto Internacional Rodríguez Ballón (AQP)',
    },
  ],
  Chile: [
    {
      city: 'Santiago',
      image:
        'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'La capital chilena y su vibrante cultura',
      airports: 'Aeropuerto Internacional Arturo Merino Benítez (SCL)',
    },
    {
      city: 'Antofagasta',
      image:
        'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Portal al desierto de Atacama',
      airports: 'Aeropuerto Internacional Andrés Sabella (ANF)',
    },
  ],
  Argentina: [
    {
      city: 'Buenos Aires',
      image:
        'https://images.unsplash.com/photo-1589909634237-717751180967?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'La París de Sudamérica',
      airports: 'Aeropuerto Internacional Ministro Pistarini (EZE)',
    },
    {
      city: 'Mendoza',
      image:
        'https://images.unsplash.com/photo-1601000785686-c45240e25f25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Capital del vino argentino',
      airports: 'Aeropuerto Internacional El Plumerillo (MDZ)',
    },
  ],
};

export default function Destinations() {
  const [selectedCountry, setSelectedCountry] = useState('Perú');
  const countries = Object.keys(destinationsByCountry);

  return (
    <section id="destinos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Destinos
        </h2>

        <div className="mb-12">
          <div className="flex justify-center space-x-4">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCountry === country
                    ? 'bg-sky-600 text-white'
                    : 'bg-white text-sky-600 hover:bg-sky-50'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsByCountry[selectedCountry].map((destination) => (
            <div
              key={destination.city}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{destination.city}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Aeropuerto:</span>{' '}
                    {destination.airports}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
