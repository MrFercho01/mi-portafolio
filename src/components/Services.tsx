import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Desarrollo Mobile',
    description: 'Aplicaciones móviles multiplataforma con React Native, Expo y TypeScript para iOS y Android.',
    icon: '📱',
  },
  {
    title: 'Desarrollo Web Full Stack',
    description: 'Sitios web modernos con Next.js, React y Tailwind CSS, optimizados para rendimiento.',
    icon: '💻',
  },
  {
    title: 'Backend & APIs',
    description: 'APIs RESTful escalables con Node.js, Express y bases de datos MongoDB/PostgreSQL.',
    icon: '⚙️',
  },
  {
    title: 'DevOps & Cloud - Azure',
    description: 'CI/CD con Azure DevOps, Azure Pipelines, deployment en Azure App Services y gestión de infraestructura.',
    icon: '☁️',
  },
  {
    title: 'DevOps & Cloud - AWS',
    description: 'Implementación de pipelines CI/CD, EC2, S3, Lambda y automatización de infraestructura en AWS.',
    icon: '🚀',
  },
  {
    title: 'Arquitectura de Software',
    description: 'Diseño de arquitecturas limpias, escalables y mantenibles siguiendo mejores prácticas.',
    icon: '🏗️',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnológicas completas para llevar tus ideas al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
