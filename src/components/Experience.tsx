import React from 'react';

interface Achievement {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  icon: string;
  color: string;
}

const experiences: Achievement[] = [
  {
    company: 'Banco Bolivariano',
    role: 'Desarrollador Full Stack - Orientación DevOps',
    period: '2021-2022, 2023-Oct 2025',
    icon: '🏦',
    color: 'bg-green-500',
    achievements: [
      'Creación de pipelines CI/CD con Azure DevOps (YAML)',
      'Implementación de GitHub Actions workflows para automatización',
      'Configuración de AWS CodePipeline y deployment automatizado',
      'Desarrollo de automatizaciones con Power Platform',
      'Aplicaciones web con Java y Visual .NET',
      'Integración de sistemas bancarios internos',
      'Optimización de workflows operativos y deployment continuo',
    ],
  },
  {
    company: 'Empresas de Retail y Servicios',
    role: 'Líder de Desarrollo / Jefe de Sistemas',
    period: '2015-2021',
    icon: '👔',
    color: 'bg-orange-500',
    achievements: [
      'Liderazgo de equipos de desarrollo y operaciones TI',
      'Gestión de proyectos de transformación digital',
      'Implementación de ERP Microsoft Dynamics AX/365',
      'Administración y configuración de Salesforce CRM',
      'Desarrollo de soluciones con Inteligencia Artificial',
      'Coordinación con stakeholders y áreas de negocio',
      'Optimización de procesos y arquitectura de sistemas',
    ],
  },
  {
    company: 'Banco Pacífico',
    role: 'Desarrollador Full Stack',
    period: '2013-2015, 2019-2021',
    icon: '💼',
    color: 'bg-blue-500',
    achievements: [
      'Desarrollo con Java y Visual .NET para sistemas bancarios',
      'Proyecto de Analítica Avanzada para Presidencia',
      'Implementación de dashboards con Power BI',
      'ETLs con Oracle y SQL Server para data warehousing',
    ],
  },
  {
    company: 'Desarrollo Mobile & Proyectos',
    role: 'Desarrollador Mobile',
    period: '2024 - Presente',
    icon: '📱',
    color: 'bg-purple-500',
    achievements: [
      'Desarrollo de RastreaTuPedido - App demo con React Native',
      'Aplicaciones móviles multiplataforma iOS/Android',
      'Arquitectura limpia con TypeScript y mejores prácticas',
      'Integración con APIs REST y servicios backend',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 10 años desarrollando soluciones empresariales
          </p>
          <p className="text-sm text-gray-500 mt-2">
            *Proyectos completados: 10+ en empresas bancarias y corporativas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center text-3xl shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="text-primary-500 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: '10+', label: 'Años de Experiencia', icon: '⏱️' },
            { number: '15+', label: 'Proyectos Completados', icon: '✅' },
            { number: '8+', label: 'Tecnologías Dominadas', icon: '💻' },
            { number: '100%', label: 'Satisfacción Cliente', icon: '⭐' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
