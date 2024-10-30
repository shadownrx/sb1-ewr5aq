import React, { useState } from 'react';
import { Plane } from 'lucide-react';

const fleet = [
  {
    aircraft: 'Boeing 737-800',
    manufacturer: 'Boeing',
    routes: 'Rutas domésticas',
    seats: '189 asientos',
    range: '5,765 km',
    image: 'https://www.copaair.com/assets/737max9.png',
    description:
      'Nuestra columna vertebral para rutas nacionales y regionales cortas',
  },
  {
    aircraft: 'Boeing 767-300ER',
    manufacturer: 'Boeing',
    routes: 'Rutas internacionales',
    seats: '269 asientos',
    range: '11,070 km',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Aeroper%C3%BA_Boeing_757-200_N52AW_MIA_1996-1-8.png',
    description: 'El clásico de largo alcance modernizado',
  },
  {
    aircraft: 'Boeing 727-200',
    manufacturer: 'Boeing',
    routes: 'Rutas especiales',
    seats: '189 asientos',
    range: '4,020 km',
    image: 'https://live.staticflickr.com/7875/33609410298_b48fd53e26_b.jpg',
    description: 'Nuestro legendario trimotor para operaciones especiales',
  },
  {
    aircraft: 'Airbus A320neo',
    manufacturer: 'Airbus',
    routes: 'Rutas regionales',
    seats: '174 asientos',
    range: '6,300 km',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Airbus_A320-214%2C_Airbus_Industrie_JP7617615.jpg',
    description: 'El más eficiente para rutas de medio alcance',
  },
  {
    aircraft: 'Airbus A350-900',
    manufacturer: 'Airbus',
    routes: 'Rutas internacionales',
    seats: '325 asientos',
    range: '15,000 km',
    image:
      'https://aeroaffaires.es/wp-content/uploads/2021/07/1200px-a350_first_flight_-_low_pass_03.jpg',
    description: 'La última tecnología en vuelos de largo alcance',
  },
  {
    aircraft: 'MD-11',
    manufacturer: 'McDonnell Douglas',
    routes: 'Rutas internacionales',
    seats: '298 asientos',
    range: '12,270 km',
    image:
      'https://media.istockphoto.com/id/494547410/es/foto/lufthansa-carga-md-11.jpg?s=612x612&w=0&k=20&c=rzy2DkRnQsGLQChlG3XfiNpQveJAeHi_ABgC9SZQ2hQ=',
    description: 'El trimotor de largo alcance por excelencia',
  },
];

export default function Fleet() {
  const [selectedManufacturer, setSelectedManufacturer] = useState('all');
  const manufacturers = ['all', 'Boeing', 'Airbus', 'McDonnell Douglas'];

  const filteredFleet =
    selectedManufacturer === 'all'
      ? fleet
      : fleet.filter(
          (aircraft) => aircraft.manufacturer === selectedManufacturer
        );

  return (
    <section id="flota" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestra Flota</h2>

        <div className="flex justify-center space-x-4 mb-12">
          {manufacturers.map((manufacturer) => (
            <button
              key={manufacturer}
              onClick={() => setSelectedManufacturer(manufacturer)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedManufacturer === manufacturer
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-100 text-sky-600 hover:bg-gray-200'
              }`}
            >
              {manufacturer === 'all' ? 'Todos' : manufacturer}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((aircraft) => (
            <div
              key={aircraft.aircraft}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={aircraft.image}
                  alt={aircraft.aircraft}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Plane className="h-6 w-6 text-sky-600 mr-2" />
                  <h3 className="text-xl font-bold">{aircraft.aircraft}</h3>
                </div>
                <p className="text-gray-600 mb-4">{aircraft.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-semibold">Fabricante:</span>
                    <span>{aircraft.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Capacidad:</span>
                    <span>{aircraft.seats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Alcance:</span>
                    <span>{aircraft.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Operación:</span>
                    <span>{aircraft.routes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
