import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  icon: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'RastreaTuPedido (Demo)',
    description: 'Proyecto demostrativo de sistema de rastreo de pedidos para empresas textiles. App móvil multiplataforma iOS/Android desarrollada con React Native, TypeScript y arquitectura limpia. Incluye documentación técnica completa y mejores prácticas de desarrollo.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'React Navigation'],
    imageUrl: 'https://images.unsplash.com/photo-1621111848501-8d3634f82336?w=800&h=600&fit=crop',
    icon: '📱',
    link: 'https://github.com/MrFercho01/RastreaTuPedido',
  },
  {
    title: 'Portafolio Profesional',
    description: 'Este mismo sitio web - Proyecto desarrollado para mi empresa personal. Portafolio profesional con diseño moderno, animaciones fluidas, completamente responsive y optimizado para SEO. Desarrollado con Vite, React y Tailwind CSS.',
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    icon: '💼',
    link: '#',
  },
  {
    title: 'Proyectos Empresariales (Referencia)',
    description: 'Múltiples proyectos desarrollados para clientes y empresas. Incluyen aplicaciones web con backend robusto, autenticación JWT, paneles de administración, integraciones bancarias, sistemas ERP y automatizaciones con Power Platform.',
    technologies: ['Node.js', 'Java', 'React', 'Power Platform', 'Dynamics 365'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
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
                {/* Icono del proyecto */}
                <div className="absolute top-4 left-4 z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                  {project.icon}
                </div>
                
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay con botón */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  {project.link && project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-primary-900 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-50 flex items-center gap-2 shadow-xl"
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
