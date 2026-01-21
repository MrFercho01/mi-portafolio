import React from 'react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  certificateUrl: string;
  icon: string;
  color: string;
  skills: string[];
}

const certificates: Certificate[] = [
  {
    title: 'Azure DevOps Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    certificateUrl: '#', // Reemplaza con el link del certificado
    icon: '☁️',
    color: 'bg-blue-500',
    skills: ['Azure Pipelines', 'CI/CD', 'Azure Repos', 'Azure Boards'],
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    certificateUrl: '#', // Reemplaza con el link del certificado
    icon: '🚀',
    color: 'bg-orange-500',
    skills: ['AWS Services', 'Cloud Architecture', 'EC2', 'S3', 'Lambda'],
  },
  {
    title: 'GitHub Actions CI/CD',
    issuer: 'GitHub',
    date: '2024',
    certificateUrl: '#', // Reemplaza con el link del certificado
    icon: '⚡',
    color: 'bg-purple-500',
    skills: ['GitHub Actions', 'Workflows', 'Automation', 'Deployment'],
  },
];

const Certificates: React.FC = () => {
  return (
    <section id="certificados" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Formación continua en tecnologías cloud y DevOps
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header con color */}
              <div className={`${cert.color} p-6 text-center`}>
                <div className="text-6xl mb-3">{cert.icon}</div>
                <h3 className="text-xl font-bold text-white">
                  {cert.title}
                </h3>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Emisor</p>
                  <p className="font-semibold text-gray-900">{cert.issuer}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Fecha</p>
                  <p className="font-semibold text-gray-900">{cert.date}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Habilidades</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full ${cert.color} text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300`}
                >
                  Ver Certificado
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            💡 Tip: Haz clic en "Ver Certificado" para validar las credenciales
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
