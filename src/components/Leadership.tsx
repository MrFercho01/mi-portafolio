import React from 'react';
import { Users, TrendingUp, Target, Award, Briefcase, Zap } from 'lucide-react';

const Leadership: React.FC = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Liderazgo de Equipos',
      description: 'Gestión y coordinación de equipos multidisciplinarios de desarrollo y operaciones TI',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Transformación Digital',
      description: 'Dirección de proyectos estratégicos de transformación digital en empresas de retail y servicios',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Gestión de Proyectos',
      description: 'Planificación, ejecución y entrega de proyectos críticos con metodologías ágiles',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Implementación ERP',
      description: 'Liderazgo en implementación de Microsoft Dynamics AX/365 en múltiples organizaciones',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Jefe de Sistemas',
      description: 'Responsabilidad sobre infraestructura TI, arquitectura de sistemas y seguridad informática',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Stakeholder Management',
      description: 'Coordinación efectiva con directivos, áreas de negocio y proveedores tecnológicos',
      color: 'from-cyan-500 to-cyan-700',
    },
  ];

  const achievements = [
    {
      number: '6+',
      label: 'Años en Liderazgo',
      description: '2015-2021',
    },
    {
      number: '20+',
      label: 'Profesionales Dirigidos',
      description: 'Equipos multidisciplinarios',
    },
    {
      number: '15+',
      label: 'Proyectos Estratégicos',
      description: 'Implementados con éxito',
    },
    {
      number: '100%',
      label: 'Cumplimiento',
      description: 'Objetivos organizacionales',
    },
  ];

  return (
    <section id="liderazgo" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Users className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-yellow-400">Experiencia Destacada</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Liderazgo Tecnológico
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 6 años liderando equipos de desarrollo y dirigiendo la estrategia tecnológica 
            en empresas de retail y servicios
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Key Responsibilities */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Responsabilidades Clave
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Definición de estrategia tecnológica alineada con objetivos de negocio',
              'Gestión de presupuestos y recursos tecnológicos',
              'Supervisión de desarrollo de software y operaciones TI',
              'Implementación de mejores prácticas de desarrollo',
              'Coordinación con proveedores y partners tecnológicos',
              'Evaluación y adopción de nuevas tecnologías',
              'Gestión de riesgos y seguridad de la información',
              'Capacitación y desarrollo del talento técnico',
            ].map((responsibility, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-gray-900 text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-200 leading-relaxed">{responsibility}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-l-4 border-yellow-400 rounded-lg p-8">
            <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed">
              "El liderazgo tecnológico no solo se trata de gestionar equipos, sino de inspirar innovación, 
              fomentar el crecimiento profesional y entregar valor al negocio a través de soluciones tecnológicas efectivas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
