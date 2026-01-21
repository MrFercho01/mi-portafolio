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
    title: 'Azure DevOps Esencial',
    issuer: 'LinkedIn Learning',
    date: '2024',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/5cc994a00053463c1a3dd35d03c4f29996319691548e46bf4616a8ea50c71b69?trk=share_certificate',
    icon: '☁️',
    color: 'bg-blue-500',
    skills: ['Azure DevOps', 'CI/CD', 'Pipelines', 'VSTS'],
  },
  {
    title: 'Fundamentos de la Arquitectura Empresarial',
    issuer: 'LinkedIn Learning',
    date: '2024',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/763af234a1268ec002d272d1e832d105dcebc89b6e67d4382f1b253de888edbf?trk=share_certificate',
    icon: '🏗️',
    color: 'bg-green-500',
    skills: ['Arquitectura', 'Enterprise', 'Diseño de Sistemas', 'Estrategia TI'],
  },
  {
    title: 'Aprende Gobernanza de Datos',
    issuer: 'LinkedIn Learning',
    date: '2024',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/4a1a2c66164d258215bd3e64a4bf4f49383770e388542aec161065b17ff94e34?trk=share_certificate',
    icon: '📊',
    color: 'bg-purple-500',
    skills: ['Data Governance', 'Data Quality', 'Compliance', 'Data Management'],
  },
  {
    title: 'Fundamentos de la Ingeniería de Datos',
    issuer: 'LinkedIn Learning',
    date: '2024',
    certificateUrl: 'https://www.linkedin.com/learning/certificates/f1a051a4ae52171b62f03adf99601bfc3bcfc7163b5d079f7dc257aaef01e649?trk=share_certificate',
    icon: '🔧',
    color: 'bg-teal-500',
    skills: ['Data Engineering', 'ETL', 'Data Pipelines', 'Big Data'],
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Grupo Business IT',
    date: '2020',
    certificateUrl: '#',
    icon: '🌐',
    color: 'bg-blue-600',
    skills: ['Azure Cloud', 'Cloud Services', 'Azure Fundamentals', 'Cloud Computing'],
  },
  {
    title: 'Administering SQL Database Infrastructure (20764C)',
    issuer: 'MAINT',
    date: '2016-2018',
    certificateUrl: '#',
    icon: '💾',
    color: 'bg-orange-500',
    skills: ['SQL Server', 'Database Admin', 'Infrastructure', 'Performance Tuning'],
  },
  {
    title: 'Licenciado en Sistemas de Información',
    issuer: 'Universidad de Guayaquil',
    date: '2008',
    certificateUrl: '#',
    icon: '🎓',
    color: 'bg-indigo-500',
    skills: ['Sistemas', 'Desarrollo', 'Análisis', 'Tecnología'],
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
