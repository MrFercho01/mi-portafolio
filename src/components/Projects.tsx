import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'RastreaTuPedido (Demo)',
    description: 'Proyecto demostrativo de sistema de rastreo de pedidos para empresas textiles. App móvil multiplataforma iOS/Android desarrollada con React Native, TypeScript y arquitectura limpia. Incluye documentación técnica completa y mejores prácticas de desarrollo.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'React Navigation'],
    gradient: 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
    icon: '📱',
    link: 'https://github.com/MrFercho01/RastreaTuPedido',
  },
  {
    title: 'Portafolio Profesional',
    description: 'Este mismo sitio web - Proyecto desarrollado para mi empresa personal. Portafolio profesional con diseño moderno, animaciones fluidas, completamente responsive y optimizado para SEO. Desarrollado con Vite, React y Tailwind CSS.',
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600',
    icon: '💼',
    link: '#',
  },
  {
    title: 'Proyectos Empresariales (Referencia)',
    description: 'Múltiples proyectos desarrollados para clientes y empresas. Incluyen aplicaciones web con backend robusto, autenticación JWT, paneles de administración, integraciones bancarias, sistemas ERP y automatizaciones con Power Platform.',
    technologies: ['Node.js', 'Java', 'React', 'Power Platform', 'Dynamics 365'],
    gradient: 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600',
    icon: '🏢',
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de mis trabajos más recientes y destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group h-48">
                {/* Background con gradiente */}
                <div className={`w-full h-full ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}>
                  {/* Patrón decorativo */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                
                {/* Icono del proyecto - centrado y más grande */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                
                {/* Overlay con botón al hacer hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                  {project.link && project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100 flex items-center gap-2 shadow-xl"
                    >
                      <Github className="w-5 h-5" />
                      <span>Ver en GitHub</span>
                    </a>
                  ) : (
                    <div className="px-6 py-3 bg-white/90 text-gray-600 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 shadow-xl">
                      <ExternalLink className="w-5 h-5" />
                      <span>Proyecto Privado</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
