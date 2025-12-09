import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden pt-20">
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo */}
          <div className="mb-8 flex justify-center animate-slide-down">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-primary-200 to-white rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img 
                src="/diseno-logo.png" 
                alt="Fernando Lara - Desarrollador Full Stack" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full shadow-2xl border-4 border-white object-contain ring-4 ring-primary-300 ring-opacity-50 bg-white"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-down">
            Fernando Lara
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-100 animate-slide-up">
            Desarrollador Full Stack
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-200 max-w-2xl mx-auto animate-slide-up delay-200">
            +10 años desarrollando soluciones web y móviles. Especializado en React Native, Next.js, TypeScript, Power Platform y Microsoft Dynamics 365
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <a
              href="#proyectos"
              className="px-8 py-3 bg-white text-primary-900 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
