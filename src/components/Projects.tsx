import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'RastreaTuPedido (Demo)',
    description: 'Proyecto demostrativo de sistema de rastreo de pedidos para empresas textiles. App móvil multiplataforma iOS/Android desarrollada con React Native, TypeScript y arquitectura limpia. Incluye documentación técnica completa y mejores prácticas de desarrollo.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'React Navigation'],
    imageUrl: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=RastreaTuPedido',
    link: 'https://github.com/MrFercho01/RastreaTuPedido',
  },
  {
    title: 'Portafolio Profesional',
    description: 'Este mismo sitio web - Proyecto desarrollado para mi empresa personal. Portafolio profesional con diseño moderno, animaciones fluidas, completamente responsive y optimizado para SEO. Desarrollado con Vite, React y Tailwind CSS.',
    technologies: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Portfolio',
    link: '#',
  },
  {
    title: 'Proyectos Empresariales (Referencia)',
    description: 'Múltiples proyectos desarrollados para clientes y empresas. Incluyen aplicaciones web con backend robusto, autenticación JWT, paneles de administración, integraciones bancarias, sistemas ERP y automatizaciones con Power Platform.',
    technologies: ['Node.js', 'Java', 'React', 'Power Platform', 'Dynamics 365'],
    imageUrl: 'https://via.placeholder.com/400x300/0ea5e9/ffffff?text=Proyectos',
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
              <div className="relative overflow-hidden group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 px-6 py-2 bg-white text-primary-900 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-50 flex items-center gap-2"
                    >
                      <span>Ver en GitHub</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
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
